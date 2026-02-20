import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "transparent", // Let index.css overrides take over
      padding: "2rem",
      color: "#fff"
    }}
    contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.1)" }}
    date={
      <span className="text-white/60 font-mono tracking-widest text-sm px-4">
        {experience.date}
      </span>
    }
    iconStyle={{ background: "#050816", color: "#fff" }}
    icon={
      <div className="flex justify-center items-center w-full h-full relative z-10">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-3xl font-black tracking-tight">{experience.title}</h3>
      <p className="text-[#00cea8] text-lg font-mono tracking-widest uppercase mt-2 mb-6" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-6 list-disc ml-5 space-y-3">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white/70 text-sm leading-relaxed tracking-wide pl-2"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

import SplitText, { staggerTextVariant } from './SplitText';

const Experience = () => {
  return (
    <>
      <motion.div
        variants={staggerTextVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          <SplitText text="Work Experience." />
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work"); 