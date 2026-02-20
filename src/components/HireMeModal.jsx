import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../styles';

const HireMeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop blur */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-primary/60 backdrop-blur-sm cursor-pointer"
                />

                {/* Modal content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="relative w-full max-w-md bg-tertiary border border-white/10 rounded-2xl p-8 shadow-2xl z-[101]"
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black-100 hover:bg-white/10 transition-colors"
                    >
                        ✕
                    </button>

                    <h3 className={styles.sectionHeadText} style={{ fontSize: '32px' }}>Let's talk.</h3>
                    <p className="text-secondary mt-2 mb-6">Got a project in mind? Reach out directly via your preferred platform.</p>

                    <div className="flex flex-col gap-4">
                        {/* Email Contact */}
                        <a
                            href="mailto:ajayku267@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-xl bg-black-100 border border-white/5 hover:border-[#915eff]/50 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#915eff]/20 flex items-center justify-center text-[#915eff] group-hover:bg-[#915eff] group-hover:text-white transition-colors">
                                ✉️
                            </div>
                            <div>
                                <p className="text-white font-medium">Send an Email</p>
                                <p className="text-secondary text-[13px]">ajayku267@gmail.com</p>
                            </div>
                        </a>

                        {/* LinkedIn Contact */}
                        <a
                            href="https://www.linkedin.com/in/ajay-kumar-65712923a"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-black-100 border border-white/5 hover:border-[#0077b5]/50 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#0077b5]/20 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                                💼
                            </div>
                            <div>
                                <p className="text-white font-medium">Connect on LinkedIn</p>
                                <p className="text-secondary text-[13px]">ajayku267</p>
                            </div>
                        </a>

                        {/* GitHub Profile */}
                        <a
                            href="https://github.com/ajayku267"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 p-4 rounded-xl bg-black-100 border border-white/5 hover:border-white/50 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                                💻
                            </div>
                            <div>
                                <p className="text-white font-medium">View GitHub</p>
                                <p className="text-secondary text-[13px]">@ajayku267</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default HireMeModal;
