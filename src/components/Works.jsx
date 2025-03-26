import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// ProjectCard component - extracted for better organization
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full min-h-[320px] flex flex-col justify-between'
      >
        {/* Project image with enhanced styling */}
        <div>
          <div className="relative w-full h-[230px] mb-4 overflow-hidden rounded-xl group">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
              {/* GitHub link */}
              {source_code_link && (
                <div
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
              
              {/* Live demo link (if available) */}
              {live_demo_link && (
                <div
                  onClick={() => window.open(live_demo_link, "_blank")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={demo}
                    alt="live demo"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              )}
            </div>
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-bold text-[20px] opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {name}
                </h3>
              </div>
            </div>
          </div>
          
          {/* Project title and description */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Project tags */}
        <div>
          <div className="mt-4 flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Section heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Section description */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Projects grid */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, ""); 