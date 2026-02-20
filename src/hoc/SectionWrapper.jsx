import { motion } from 'framer-motion';
import { styles } from '../styles';
import { sectionReveal } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={sectionReveal()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }} // Trigger slightly earlier
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 origin-bottom`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper; 