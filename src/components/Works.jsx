import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Collect all unique tag names for filters
const ALL_TAGS = ['All', ...Array.from(
  new Set(projects.flatMap((p) => p.tags.map((t) => t.name)))
)];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.35 }}
    style={{ perspective: 1000 }} // Enable 3D space
  >
    <Tilt
      options={{
        max: 25,
        scale: 1.05,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[320px] flex flex-col justify-between border border-white/5 shadow-2xl'
      style={{ transformStyle: "preserve-3d" }} // Allow children to pop out
    >
      <div style={{ transform: "translateZ(30px)" }}>
        {/* Project Image that pops out */}
        <div
          className="relative w-full h-[230px] mb-4 rounded-xl group"
          style={{ transform: "translateZ(50px)" }} // Extra pop for the image
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-xl transition-all duration-300"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
            {source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <img src={demo} alt="live demo" className="w-1/2 h-1/2 object-contain" />
              </div>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-white font-bold text-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">{name}</h3>
            </div>
          </div>
        </div>
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 mb-5" style={{ transform: "translateZ(20px)" }}>
        {tags.map((tag) => (
          <span key={`${name}-${tag.name}`} className={`text-[12px] font-medium px-2 py-1 rounded-md bg-black-100/50 ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.some((t) => t.name === activeFilter));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>

      {/* Filter Buttons */}
      <div className="mt-8 flex flex-wrap gap-3">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1.5 rounded-full text-[14px] font-medium transition-all duration-200
              ${activeFilter === tag
                ? 'bg-[#915eff] text-white shadow-md shadow-[#915eff]/30'
                : 'bg-tertiary text-secondary hover:text-white border border-white/10 hover:border-[#915eff]/50'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div className='mt-10 flex flex-wrap gap-7' layout>
        <AnimatePresence>
          {filtered.map((project, index) => (
            <ProjectCard
              key={`project-${project.name}`}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");