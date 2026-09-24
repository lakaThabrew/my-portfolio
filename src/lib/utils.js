/**
 * Utility: cn (classnames)
 * Merges class names, filtering falsy values.
 * Provides the same API as the shadcn `cn` helper without requiring the full shadcn setup.
 */
export function cn(...inputs) {
  return inputs
    .flat()
    .filter(Boolean)
    .join(' ');
}
