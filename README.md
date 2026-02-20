<div align="center">
  <img src="./public/desktop.png" alt="Portfolio Preview" width="100%"/>

  <br />
  <br />

  # 🌟 Ajay Kumar | Interactive 3D Developer Portfolio

  **A maximalist, high-performance 3D portfolio showcasing modern web engineering.**

  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

  <p align="center">
    <a href="https://ajayku267.github.io/Portfolio/">View Live Site</a>
    ·
    <a href="https://github.com/ajayku267/Portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/ajayku267/Portfolio/issues">Request Feature</a>
  </p>
</div>

---

## 🚀 Overview

This repository houses the source code for my personal developer portfolio. Moving beyond traditional minimalist designs, this project embraces a **"Maximalist Bento Box"** aesthetic—combining interactive WebGL particles, glassmorphism, procedural UI sounds, and cinematic Framer Motion animations to create a memorable, high-energy user experience.

## ✨ Key Technical Features

- 🧊 **Glassmorphic UI Systems** - Heavily stylized `bento-glass` components with translucent backdrop filters and dynamic lighting glare on hover.
- 🌌 **WebGL Particle Engine** - A responsive, full-screen particle universe utilizing `tsparticles` that reacts fluidly to DOM events and cursor positioning.
- 🌐 **Interactive 3D Tech Sphere** - An interactive, rotating tag cloud of technologies engineered using `@react-three/fiber` and `@react-three/drei`.
- 🧲 **Magnetic Elements & Spline physics** - Custom hooks to create physical, magnetic pull effects on CTA buttons using Framer Motion springs.
- 🔊 **Procedural Audio Hooks** - Integrated `use-sound` for futuristic, tactile feedback during theme toggles and button interactions.
- 🎬 **Cinematic Page Orchestration** - Complex staggered text reveals, infinite hardware-accelerated marquees, and buttery smooth layout transitions.

## 🛠️ Architecture & Technologies

### Frontend Ecosystem
- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Vanilla CSS utility classes
- **Animation Strategy**: [Framer Motion](https://www.framer.com/motion/) for DOM routing/transitions, `react-tilt` for 3D card manipulation.

### 3D & WebGL Subsystem
- **Core Library**: [Three.js](https://threejs.org/)
- **React Abstraction**: `@react-three/fiber`
- **Helpers**: `@react-three/drei`

### Integrations
- **Contact Form**: [EmailJS](https://www.emailjs.com/) for serverless form handling.

---

## ⚙️ Local Development

To run this project locally, ensure you have **Node.js (v16+)** installed.

### 1. Clone the repository
```bash
git clone https://github.com/ajayku267/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and inject your EmailJS credentials:
```env
VITE_APP_EMAILJS_SERVICE_ID="your_service_id"
VITE_APP_EMAILJS_TEMPLATE_ID="your_template_id"
VITE_APP_EMAILJS_PUBLIC_KEY="your_public_key"
```

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Production Build
```bash
npm run build
```

---

## 📂 Codebase Structure

```text
src/
├── assets/            # Static media (SVGs, WebP images, models)
├── components/        # React UI layer
│   └── canvas/        # Isolated Three.js WebGL context components
├── constants/         # Centralized application data (Projects, Experience)
├── context/           # React Context Providers (Theme, Audio)
├── hoc/               # Higher-Order Components (e.g., SectionWrapper)
├── utils/             # Animation variants, hardware/math helpers
├── index.css          # Global CSS, keyframes, and glassmorphic utilities
└── App.jsx            # Application root and layout orchestrator
```

---

## 📬 Contact & Links

I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!

- **Email**: [ajayku267@gmail.com](mailto:ajayku267@gmail.com)
- **LinkedIn**: [Ajay Kumar](https://www.linkedin.com/in/ajay-kumar-65712923a)
- **GitHub**: [@ajayku267](https://github.com/ajayku267)

<div align="center">
  <br/>
  <i>Engineered with precision and ❤️ by Ajay Kumar.</i>
</div>
