
# 🌟 Lakmana Thabrew - Personal Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions" />
</p>

> **Computer Science & Engineering Undergraduate @ University of Moratuwa, Sri Lanka.**

A premium, high-performance personal portfolio website designed to showcase my journey as a developer, designer, and student. This project features a cutting-edge UI with **Glassmorphism**, **3D elements**, and **automated content pipelines**.

---

## ✨ Key Features

-   **🎨 Immersive UI/UX**: A sleek modern aesthetic featuring glassmorphism, floating elements, and smooth scroll animations.
-   **🧊 3D Experiences**: Integrated with **Three.js** and **React Three Fiber** for interactive 3D components.
-   **✍️ Automated Blog Feed**: Seamlessly syncs latest **Medium** articles bi-weekly via automated GitHub Actions.
-   **🖼️ Dynamic Media Showcases**: 
    -   **Photography Gallery**: Masonry layout with a custom-built, responsive lightbox modal.
    -   **Graphic Design**: Dedicated portfolio for visual arts and creative work.
-   **🤖 Repository Automation**: Automated weekly status reports tracking project progress and backlog health.
-   **📄 Interactive Resume**: Full-featured Education and Experience sections with detailed timelines.
-   **📧 Smart Contact System**: Fully functional contact form powered by **Formspree** with real-time validation.

---

## 🛠️ Tech Stack

### Frontend & Animation
-   **Core**: [React.js](https://reactjs.org/) (v19)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Motion**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://r3f.docs.pmnd.rs/)
-   **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)

### Automation & CI/CD
-   **GitHub Actions**: 
    -   `fetch-blogs`: Bi-weekly RSS ingestion for Medium posts.
    -   `weekly-repo-status`: Automated weekly repository health reporting.
    -   `deploy`: Continuous Deployment to GitHub Pages.

---

## 🤖 Automation Pipelines

This portfolio is built to be "low-maintenance":
-   **Medium Integration**: Every 1st and 15th of the month, a GitHub Action runs a script (`fetch-blogs.js`) to update `blogs.json` from my Medium RSS feed.
-   **Repo Analytics**: Every Monday, the repository generates a "Weekly Repo Status" issue to track new issues, closed PRs, and general momentum.

---

## 📂 Project Structure

```bash
my-portfolio/
├── .github/workflows/   # CI/CD & Automation scripts
├── public/
│   └── assets/          # Static media (Gallery, Icons, etc.)
├── scripts/             # Utility scripts (e.g., fetch-blogs.js)
├── src/
│   ├── components/      # Modular React components
│   ├── data/            # JSON/JS data files for content management
│   ├── App.js           # Core Routing & Layout logic
│   └── index.css        # Global styles & Design tokens
└── package.json         # Dependencies & Build scripts
```

---

## ⚡ Getting Started

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

3.  **Launch for Development**:
    ```bash
    npm start
    ```
    Visit `http://localhost:3000` to see the magic.

---

## 📝 Configuration

Content is decoupled from logic. To update information, modify files in `src/data/`:
-   `personalInfo.js`: Profile details and social links.
-   `projects.js` / `graphicDesigns.js`: Portfolio items.
-   `gallery.js`: Image metadata for the photography page.
-   `experience.js` / `education.js`: Professional history.

---

## 📬 Connectivity

**Lakmana Thabrew**  
*CSE Undergraduate | Web Developer | Graphic Designer*

-   📧 [lakmanathabrew123@gmail.com](mailto:lakmanathabrew123@gmail.com)
-   🐙 [GitHub Profile](https://github.com/lakaThabrew)
-   💼 [LinkedIn Profile](https://linkedin.com/in/lakmana-thabrew)
-   🌐 [Live Portfolio](https://lakathabrew.github.io/my-portfolio/)

---
<p align="center">
  <i>Designed & Engineered with ❤️ by Lakmana Thabrew.</i>
</p>
