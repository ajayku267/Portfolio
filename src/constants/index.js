/**
 * Constants and data for the 3D Portfolio website
 * Includes navigation links, services, technologies, experience, and projects
 */

import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  stockVision,
  mausamWeather,
  digitalWardrobe,
  threejs,
} from "../assets";

// --------------------------------------------------
// Navigation Links
// --------------------------------------------------
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// --------------------------------------------------
// Services Offered
// --------------------------------------------------
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

// --------------------------------------------------
// Technology Stack
// --------------------------------------------------
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// --------------------------------------------------
// Work Experience
// --------------------------------------------------
const experiences = [
  {
    title: "Frontend Developer",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - Dec 2023",
    points: [
      "Built Soccer Sphere, a football platform using React.js, integrating a player search API, real-time chat, and authentication system.",
      "Developed Mausam, a weather forecasting app that provides real-time data using OpenWeather API, enhancing UI/UX with smooth animations.",
      "Created Stock Vision, a stock prediction website using Python & AI models, offering users insightful predictions and trend analysis.",
      "Designed a highly interactive Kanban board with React.js, enabling ticket management with dynamic status grouping and drag-and-drop features.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Manipal Business Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
      "Developed a finance-related project, streamlining reconciliation processes and resolving discrepancies in banking transactions.",
      "Automated data processing to improve accuracy, reducing reconciliation errors.",
      "Collaborated with the team to enhance internal financial workflows, ensuring seamless alignment between statements and internal accounts.",
    ],
  },
];

// --------------------------------------------------
// Projects
// --------------------------------------------------
const projects = [
  {
    name: "Stock Vision",
    description:
      "Built a stock market prediction website using AI models, helping users analyze trends and make data-driven investment decisions.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: stockVision,
    source_code_link: "https://github.com/ajayku267/Stock.vision",
    // live_demo_link: "https://your-demo-link.com",
  },
  {
    name: "Mausam",
    description:
      "Created a weather forecasting app providing real-time updates on temperature, humidity, and conditions.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeather API",
        color: "green-text-gradient",
      },
    ],
    image: mausamWeather,
    source_code_link: "https://github.com/ajayku267/Weather-Website",
  },
  {
    name: "Digital Wardrobe Manager",
    description:
      "Developing an AI-driven fashion assistant to suggest outfits based on user-owned clothes. (ongoing)",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "Gen AI",
        color: "green-text-gradient",
      },
      {
        name: "API Integration",
        color: "pink-text-gradient",
      },
    ],
    image: digitalWardrobe,
    // source_code_link: "https://github.com/",
  },
];

// Export all data
export { services, technologies, experiences, projects }; 