import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../constants';

const AppDock = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [active, setActive] = useState('about');

    useEffect(() => {
        const handleScroll = () => {
            // Show dock only after scrolling past Hero (approx 400px)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Icons for dock items
    const getIcon = (id) => {
        switch (id) {
            case 'about': return '👤';
            case 'work': return '💼';
            case 'skills': return '⚡';
            case 'contact': return '✉️';
            default: return '📍';
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden block"
                >
                    <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-black-100/80 backdrop-blur-md border border-white/10 shadow-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                onClick={() => setActive(link.id)}
                                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                  ${active === link.id ? 'bg-white/10 scale-110' : 'hover:bg-white/5'}`}
                            >
                                <span className="text-xl mb-0.5">{getIcon(link.id)}</span>
                                <span className={`text-[9px] font-medium ${active === link.id ? 'text-white' : 'text-secondary'}`}>
                                    {link.title}
                                </span>

                                {/* Active indicator dot */}
                                {active === link.id && (
                                    <motion.div
                                        layoutId="dock-active"
                                        className="absolute -bottom-1 w-1 h-1 rounded-full bg-[#915eff]"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AppDock;
