import { motion } from 'framer-motion';
import { styles } from '../styles';
import { certifications } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const CertCard = ({ index, title, issuer, date, icon, link }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.15, 0.6)}
        className="bg-tertiary rounded-2xl p-6 flex flex-col gap-3 border border-white/5
               hover:border-[#915eff]/40 transition-all duration-300 hover:-translate-y-1"
    >
        <div className="flex items-center gap-3">
            <span className="text-3xl">{icon}</span>
            <div>
                <h3 className="text-white font-bold text-[16px] leading-snug">{title}</h3>
                <p className="text-secondary text-[13px]">{issuer}</p>
            </div>
        </div>
        <div className="flex items-center justify-between mt-1">
            <span className="text-[#915eff] text-[13px] font-medium">{date}</span>
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-secondary hover:text-white transition-colors underline underline-offset-2"
                >
                    View →
                </a>
            )}
        </div>
    </motion.div>
);

const Certifications = () => (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I've earned</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
                <CertCard key={cert.title} index={i} {...cert} />
            ))}
        </div>
    </>
);

export default SectionWrapper(Certifications, 'certifications');
