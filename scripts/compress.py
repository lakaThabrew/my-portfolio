import os
import sys
import subprocess
from PIL import Image

def get_git_root():
    """Finds the root directory of the git repository."""
    try:
        result = subprocess.run(
            ["git", "rev-parse", "--show-toplevel"],
            capture_output=True,
            text=True,
            check=True
        )
        return result.stdout.strip()
    except Exception:
        # Fallback to current working directory if not in a git repo
        return os.getcwd()

def get_git_images():
    """Retrieves list of unstaged or untracked image files from git status."""
    try:
        result = subprocess.run(
            ["git", "status", "--porcelain"],
            capture_output=True,
            text=True,
            check=True
        )
        lines = result.stdout.splitlines()
    except Exception as e:
        print(f"Error running git status: {e}")
        return []

    image_extensions = {'.png', '.jpg', '.jpeg', '.webp'}
    images = []
    
    for line in lines:
        if len(line) < 4:
            continue
        status = line[:2]
        path = line[3:].strip()
        
        # Strip git quotes around file paths with spaces or special characters
        if path.startswith('"') and path.endswith('"'):
            path = path[1:-1]
            try:
                path = bytes(path, "utf-8").decode("unicode_escape")
            except Exception:
                pass
            
        _, ext = os.path.splitext(path)
        if ext.lower() in image_extensions:
            images.append((path, status))
            
    return images

def compress_image(file_path, max_dim=1920, quality=85):
    """Resizes and compresses an image in-place if it exceeds max dimensions."""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return False

    original_size = os.path.getsize(file_path)
    try:
        # Disable DecompressionBomb limit warnings for very large inputs
        Image.MAX_IMAGE_PIXELS = None
        
        with Image.open(file_path) as img:
            width, height = img.size
            print(f"\nProcessing: {file_path}")
            print(f"  Original size: {original_size / 1024 / 1024:.2f} MB ({width}x{height})")
            
            resized = False
            if width > max_dim or height > max_dim:
                if width > height:
                    new_width = max_dim
                    new_height = int(height * (max_dim / width))
                else:
                    new_height = max_dim
                    new_width = int(width * (max_dim / height))
                
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                print(f"  Resized to: {new_width}x{new_height}")
                resized = True
            
            _, ext = os.path.splitext(file_path)
            ext = ext.lower()
            
            if ext in ['.jpg', '.jpeg']:
                img.save(file_path, 'JPEG', quality=quality, optimize=True)
            elif ext == '.png':
                img.save(file_path, 'PNG', optimize=True)
            elif ext == '.webp':
                img.save(file_path, 'WEBP', quality=quality)
            else:
                print(f"  Unsupported format: {ext}")
                return False
                
            new_size = os.path.getsize(file_path)
            reduction = (original_size - new_size) / original_size * 100
            print(f"  Compressed size: {new_size / 1024 / 1024:.2f} MB (Reduced by {reduction:.1f}%)")
            return True
            
    except Exception as e:
        print(f"  Error compressing image: {e}")
        return False

def main():
    repo_root = get_git_root()
    
    # If paths are provided as command-line arguments
    if len(sys.argv) > 1:
        files_to_process = [(arg, "manual") for arg in sys.argv[1:]]
        print(f"Processing {len(files_to_process)} manual file(s)...")
    else:
        # Otherwise, dynamically find unstaged/untracked files from git
        print("Checking git status for new/modified images...")
        files_to_process = get_git_images()
        if not files_to_process:
            print("No unstaged or untracked images found in git status.")
            return

    staged_warning = False
    processed_count = 0
    
    for relative_path, status in files_to_process:
        full_path = os.path.join(repo_root, relative_path)
        
        # Check if the file is staged in index
        if status.strip() in ['M', 'A', 'AM', 'MM', 'RM']:
            staged_warning = True
            
        success = compress_image(full_path)
        if success:
            processed_count += 1
            
    if processed_count > 0:
        print(f"\nSuccessfully processed {processed_count} image(s).")
        if staged_warning:
            print("\n[WARNING] Some files were already staged in git. ")
            print("Please run 'git add <file>' again to stage the optimized versions before committing.")
    else:
        print("\nNo images were modified.")

if __name__ == "__main__":
    main()
