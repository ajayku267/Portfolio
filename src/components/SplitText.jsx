import { motion } from 'framer-motion';

const SplitText = ({ text }) => {
    return (
        <span className="inline-block overflow-hidden">
            {text.split('').map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    className="inline-block"
                    variants={{
                        hidden: { y: '100%', opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </span>
    );
};

export const staggerTextVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

export default SplitText;
