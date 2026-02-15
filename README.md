
# Lakmana Thabrew - Portfolio

> *Undergraduate CSE @ UOM in Sri Lanka.*

A sleek, modern, and responsive personal portfolio website built with **React** and **Tailwind CSS**. This project showcases my journey as a Computer Science Undergraduate, Graphic Designer, and Web Developer, featuring a unique theme with smooth animations and glassmorphism effects.

## 🚀 Features

*   **Modern Design**: A unique aesthetic with floating elements, glassmorphism, and smooth transitions.
*   **Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.
*   **Interactive Animations**: Powered by **Framer Motion** for engaging page transitions and scroll effects.
*   **Dynamic Gallery**: A masonry-layout photo gallery with a built-in lightbox for viewing high-resolution images.
*   **Project Showcase**: Dedicated sections for coding projects and graphic design work.
*   **Comprehensive Resume**: Interactive "Experience" and "Education" pages detailing my professional background.
*   **Contact Form**: Functional contact form powered by **Formspree**.
*   **Dark/Light Mode Ready**: Built with Tailwind's dark mode capabilities in mind (configured in `tailwind.config.js`).

## 🛠️ Tech Stack

*   **Frontend**: [React.js](https://reactjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Routing**: [React Router](https://reactrouter.com/)
*   **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
*   **Deployment**: GitHub Pages (configured)

## 📂 Project Structure

```bash
my-portfolio/
├── public/
│   ├── assets/          # Static assets (Gallery images, etc.)
│   └── index.html
├── src/
│   ├── components/      # Reusable React components (Pages, NavBar, Footer)
│   ├── data/            # Data files for easy content management (personalInfo, projects, gallery)
│   ├── App.js           # Main application component with Routing
│   ├── index.css        # Global styles & Tailwind directives
│   └── index.js         # Entry point
└── package.json
```

## ⚡ Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your machine.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/lakaThabrew/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📝 Configuration

### Updating Content
All content is managed via the `src/data/` folder. You can easily update your information without touching the component code:
*   **`personalInfo.js`**: Update your name, titles, bio, and contact links.
*   **`projects.js`**: Add or edit your coding projects.
*   **`gallery.js`**: Add new images to the gallery page.
*   **`skills.js`**, **`experience.js`**, **`education.js`**: Manage your resume content.

### Adding Gallery Images
1.  Place your images in `public/assets/Gallery/Landscape` or `public/assets/Gallery/portrait`.
2.  Add a new entry to `src/data/gallery.js`:
    ```javascript
    {
      id: 101, // Unique ID
      src: "/assets/Gallery/Landscape/your-image.jpg",
      type: "landscape",
      alt: "Description"
    }
    ```

## 🚀 Deployment

This project depends on GitHub Pages for deployment.

1.  **Build the project**:
    ```bash
    npm run build
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```

## 📬 Contact

**Lakmana Thabrew**  
*Computer Science & Engineering Undergraduate*

*   📧 **Email**: [lakmanathabrew123@gmail.com](mailto:lakmanathabrew123@gmail.com)
*   🐙 **GitHub**: [lakaThabrew](https://github.com/lakaThabrew)
*   💼 **LinkedIn**: [lakmana-thabrew](https://linkedin.com/in/lakmana-thabrew)
*   🌐 **Website**: [lakaThabrew.dev](https://lakathabrew.github.io/my-portfolio/)

---
*Designed & Built with ❤️ by Lakmana Thabrew.*
