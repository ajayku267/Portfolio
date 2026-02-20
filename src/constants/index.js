/**
 * Constants and data for the 3D Portfolio website
 * Includes navigation links, services, technologies, experience, projects,
 * skills, certifications, and testimonials
 */

import {
  mobile,
  backend,
  creator,
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
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

// --------------------------------------------------
// Services Offered
// --------------------------------------------------
const services = [
  { title: "Web Developer", icon: web },
  { title: "React Native Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Content Creator", icon: creator },
];

// --------------------------------------------------
// Technology Stack
// --------------------------------------------------
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
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
      { name: "Python", color: "blue-text-gradient" },
      { name: "machine-learning", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: stockVision,
    source_code_link: "https://github.com/ajayku267/Stock.vision",
  },
  {
    name: "Mausam",
    description:
      "Created a weather forecasting app providing real-time updates on temperature, humidity, and conditions.",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "OpenWeather-API", color: "green-text-gradient" },
    ],
    image: mausamWeather,
    source_code_link: "https://github.com/ajayku267/Weather-Website",
  },
  {
    name: "Digital Wardrobe Manager",
    description:
      "Developing an AI-driven fashion assistant to suggest outfits based on user-owned clothes. (ongoing)",
    tags: [
      { name: "react.js", color: "blue-text-gradient" },
      { name: "Gen-AI", color: "green-text-gradient" },
      { name: "API-Integration", color: "pink-text-gradient" },
    ],
    image: digitalWardrobe,
  },
];

// --------------------------------------------------
// Skills with Proficiency
// --------------------------------------------------
const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 78 },
  { name: "Python", level: 80 },
  { name: "Three.js / WebGL", level: 65 },
  { name: "MongoDB", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Git & GitHub", level: 85 },
  { name: "Machine Learning", level: 60 },
];

// --------------------------------------------------
// Certifications
// --------------------------------------------------
const certifications = [
  {
    title: "React — The Complete Guide",
    issuer: "Udemy",
    date: "2023",
    icon: "⚛️",
    link: "#",
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Andrew Ng)",
    date: "2023",
    icon: "🤖",
    link: "#",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    icon: "🌐",
    link: "#",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "2023",
    icon: "🐍",
    link: "#",
  },
  {
    title: "Three.js Journey",
    issuer: "Bruno Simon",
    date: "2024",
    icon: "🎮",
    link: "#",
  },
  {
    title: "Git & GitHub Bootcamp",
    issuer: "Udemy",
    date: "2022",
    icon: "🗂️",
    link: "#",
  },
];

// --------------------------------------------------
// Testimonials
// --------------------------------------------------
const testimonials = [
  {
    quote:
      "Ajay is one of the most dedicated developers I've worked with. His attention to detail and ability to pick up new technologies quickly is impressive.",
    name: "Riya Sharma",
    role: "Team Lead @ Manipal Business Solutions",
  },
  {
    quote:
      "Working with Ajay on the Kanban board project was a great experience. He delivered clean, scalable code and always went the extra mile.",
    name: "Rahul Verma",
    role: "Senior Developer",
  },
  {
    quote:
      "Ajay's work on the Stock Vision AI project showed real depth — he combined ML models with a polished React frontend seamlessly.",
    name: "Prof. K. Reddy",
    role: "Faculty Mentor",
  },
];

// Export all data
export {
  services,
  technologies,
  experiences,
  projects,
  skills,
  certifications,
  testimonials,
};