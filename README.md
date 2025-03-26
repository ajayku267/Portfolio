# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and TailwindCSS. This portfolio showcases projects, skills, and experience with engaging 3D elements and animations.

![Portfolio Preview](preview.png)

## 🌟 Features

- **Interactive 3D Elements**: Engaging user experience with Three.js
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Project Showcase**: Highlight your best work with images and links
- **Contact Form Integration**: Connected with EmailJS for direct messaging
- **Smooth Animations**: Using Framer Motion for fluid transitions
- **Modern UI**: Clean, professional design with TailwindCSS

## 🛠️ Technologies Used

- **Frontend Framework**: React.js
- **3D Graphics**: Three.js
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Contact Integration**: EmailJS
- **Deployment**: Vercel/Netlify

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

3. Configure EmailJS
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Set up your service, template, and get your public key
   - Update the constants in `src/components/Contact.jsx`:
     ```javascript
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

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
3d-portfolio/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, icons, and other media
│   ├── components/     # React components
│   │   └── canvas/     # Three.js 3D components
│   ├── constants/      # Data and configuration constants
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── index.css       # Global styles
│   ├── main.jsx        # Application entry point
│   └── styles.js       # Shared style constants
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js      # Vite configuration
```

## 🔧 Customization

### Personal Information

Update your personal information, experiences, and projects in `src/constants/index.js`.

### Styling

- Global styles are in `src/index.css`
- TailwindCSS utility classes are used throughout components
- Shared style constants are in `src/styles.js`

### 3D Models

Customize the 3D elements by modifying the files in `src/components/canvas/`.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)

---

Created with ❤️ by [Your Name]
