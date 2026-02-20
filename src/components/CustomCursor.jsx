import { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let raf;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            if (ringRef.current) {
                ringRef.current.style.left = `${ringX}px`;
                ringRef.current.style.top = `${ringY}px`;
            }
            raf = requestAnimationFrame(animate);
        };

        const onMouseEnterLink = () => {
            if (ringRef.current) ringRef.current.classList.add('cursor-ring--hover');
            if (dotRef.current) dotRef.current.classList.add('cursor-dot--hover');
        };
        const onMouseLeaveLink = () => {
            if (ringRef.current) ringRef.current.classList.remove('cursor-ring--hover');
            if (dotRef.current) dotRef.current.classList.remove('cursor-dot--hover');
        };

        document.addEventListener('mousemove', onMouseMove);

        // Hover effect on interactive elements
        const links = document.querySelectorAll('a, button, [role="button"]');
        links.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterLink);
            el.addEventListener('mouseleave', onMouseLeaveLink);
        });

        raf = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            links.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterLink);
                el.removeEventListener('mouseleave', onMouseLeaveLink);
            });
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
};

export default CustomCursor;
