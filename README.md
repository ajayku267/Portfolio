# 🚀 Ajay Kumar's 3D Portfolio

![Portfolio Preview](preview.png)

## ✨ [Live Demo](https://your-portfolio-url.com)

An immersive, interactive 3D portfolio built with React, Three.js, and Tailwind CSS showcasing my projects, skills, and professional journey through engaging 3D elements and smooth animations.

---

## 🌟 Features

- **Interactive 3D Models** - Engage with responsive 3D elements powered by Three.js
- **Modern UI/UX** - Clean, intuitive interface with Tailwind CSS styling
- **Responsive Design** - Seamless experience across all devices and screen sizes
- **Project Showcase** - Highlighted projects with detailed descriptions and links
- **Dynamic Content** - Easily updatable content via centralized data files
- **Performance Optimized** - Fast loading times with optimized 3D rendering
- **Email Integration** - Direct contact through EmailJS integration
- **Smooth Animations** - Fluid transitions powered by Framer Motion

---

## 💻 Tech Stack

<table>
  <tr>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50"/><br />React</td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" width="50" height="50"/><br />Three.js</td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="50" height="50"/><br />Tailwind CSS</td>
    <td align="center"><img src="https://vitejs.dev/logo.svg" width="50" height="50"/><br />Vite</td>
  </tr>
  <tr>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50" height="50"/><br />JavaScript</td>
    <td align="center"><img src="https://www.emailjs.com/logo.png" width="50" height="50"/><br />EmailJS</td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="50" height="50"/><br />HTML5</td>
    <td align="center"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="50" height="50"/><br />CSS3</td>
  </tr>
</table>

---

## 🔍 Featured Projects

### 📈 Stock Vision
A stock market prediction application leveraging AI models to help users analyze trends and make data-driven investment decisions.
- **Tech:** Python, Machine Learning, React
- [View Code](https://github.com/ajayku267/Stock.vision)

### ☁️ Mausam
A weather forecasting app providing real-time updates on temperature, humidity, and conditions with a smooth, intuitive interface.
- **Tech:** React.js, OpenWeather API
- [View Code](https://github.com/ajayku267/Weather-Website)

### 👕 Digital Wardrobe Manager
An AI-driven fashion assistant that helps users manage their wardrobe and suggests outfits based on user-owned clothes.
- **Tech:** React.js, Gen AI, API Integration
- *Project in development*

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure EmailJS for the contact form
   ```javascript
   // Update these in src/components/Contact.jsx
   const EMAIL_SERVICE_ID = 'your_service_id';
   const EMAIL_TEMPLATE_ID = 'your_template_id';
   const EMAIL_PUBLIC_KEY = 'your_public_key';
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## 📂 Project Structure

```
3d-portfolio/
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, SVGs
│   │   └── projects/      # Project images
│   ├── components/        # React components
│   │   └── canvas/        # Three.js 3D components
│   ├── constants/         # Data files
│   ├── hoc/               # Higher-order components
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── styles.js          # Global styles
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🛠️ Customization

Want to make your own 3D portfolio? Here's how to customize this template:

1. **Personal Information**: Update `src/constants/index.js` with your details
2. **Project Images**: Add your project images to `src/assets/projects/`
3. **3D Models**: Modify components in `src/components/canvas/`
4. **Colors & Styling**: Adjust the theme in `src/styles.js` and TailwindCSS classes

---

## 📱 Responsive Design

The portfolio is fully responsive and adapts to different screen sizes:
- **Desktop**: Immersive 3D experience with all features
- **Tablet**: Optimized layouts with maintained 3D elements
- **Mobile**: Streamlined interface with touch-friendly controls

---

## 📞 Contact

Have questions or want to connect? Reach out through:

- **Email**: your.email@example.com
- **LinkedIn**: [Ajay Kumar](https://linkedin.com/in/yourusername)
- **GitHub**: [ajayku267](https://github.com/ajayku267)

Or use the contact form directly on the portfolio!

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/) for 3D graphics
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) for React integration with Three.js
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [EmailJS](https://www.emailjs.com/) for email functionality

---

<p align="center">
  Made with ❤️ by Ajay Kumar
</p>
