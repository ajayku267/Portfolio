import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../utils/sound';

const MagneticButton = ({ children, className, onClick, href, download }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = buttonRef.current.getBoundingClientRect();

        // Calculate distance from center of button
        const x = (clientX - (left + width / 2)) * 0.4; // 0.4 determines "pull strength"
        const y = (clientY - (top + height / 2)) * 0.4;

        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
        playSound('hover');
    };

    const handleClick = (e) => {
        playSound('click');
        if (onClick) onClick(e);
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={buttonRef}
            href={href}
            onClick={handleClick}
            download={download}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative overflow-hidden cursor-none ${className}`}
            style={{ zIndex: 10 }} // Ensure it stays clickable above backgrounds
        >
            {/* Glow effect that follows mouse inside button */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                animate={{
                    background: `radial-gradient(circle 50px at ${position.x + 50}% ${position.y + 50}%, rgba(255,255,255,0.2) 0%, transparent 100%)`
                }}
            />
            <span className="relative z-10 pointer-events-none">{children}</span>
        </Component>
    );
};

export default MagneticButton;
