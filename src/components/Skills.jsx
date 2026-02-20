import { motion } from 'framer-motion';
import { styles } from '../styles';
import { skills } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const SkillBar = ({ name, level, color, index }) => (
    <motion.div
        variants={fadeIn('right', 'spring', 0.1 * index, 0.5)}
        className="mb-5"
    >
        <div className="flex justify-between mb-1">
            <span className="text-white font-medium text-[14px]">{name}</span>
            <span className="text-[#915eff] font-bold text-[14px]">{level}%</span>
        </div>
        <div className="w-full bg-black-100 rounded-full h-3 overflow-hidden">
            <motion.div
                className="h-3 rounded-full"
                style={{ background: color || 'linear-gradient(90deg, #915eff, #00cea8)' }}
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.1 * index, ease: 'easeOut' }}
                viewport={{ once: true }}
            />
        </div>
    </motion.div>
);

const Skills = () => {
    const half = Math.ceil(skills.length / 2);
    const leftCol = skills.slice(0, half);
    const rightCol = skills.slice(half);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I know</p>
                <h2 className={styles.sectionHeadText}>Skills & Proficiency.</h2>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-14">
                <div>
                    {leftCol.map((skill, i) => (
                        <SkillBar key={skill.name} {...skill} index={i} />
                    ))}
                </div>
                <div>
                    {rightCol.map((skill, i) => (
                        <SkillBar key={skill.name} {...skill} index={i + half} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default SectionWrapper(Skills, 'skills');
