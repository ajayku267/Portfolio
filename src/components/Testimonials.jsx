import { motion } from 'framer-motion';
import { styles } from '../styles';
import { testimonials } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const TestimonialCard = ({ index, quote, name, role, avatar }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.2, 0.7)}
        className="bg-black-100 rounded-2xl p-7 border border-white/5
               hover:border-[#915eff]/30 transition-all duration-300 flex flex-col justify-between"
    >
        <p className="text-secondary text-[15px] leading-[28px] italic">"{quote}"</p>
        <div className="flex items-center gap-3 mt-6">
            {/* Avatar circle */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#915eff] to-[#00cea8]
                      flex items-center justify-center text-white font-bold text-[16px] shrink-0">
                {avatar || name[0]}
            </div>
            <div>
                <p className="text-white font-semibold text-[14px]">{name}</p>
                <p className="text-secondary text-[13px]">{role}</p>
            </div>
        </div>
    </motion.div>
);

const Testimonials = () => (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
                <TestimonialCard key={t.name} index={i} {...t} />
            ))}
        </div>
    </>
);

export default SectionWrapper(Testimonials, 'testimonials');
