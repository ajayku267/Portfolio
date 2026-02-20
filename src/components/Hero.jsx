import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import MagneticButton from './MagneticButton';
import ParticleBackground from './ParticleBackground';

const ROLES = [
  'Full-Stack Developer',
  'React Specialist',
  'AI & ML Enthusiast',
  'Three.js Creator',
  'Open Source Contributor',
];

const useTypewriter = (words, speed = 80, pause = 1800) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!deleting && subIndex === words[index].length + 1) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
        setText(words[index].substring(0, subIndex));
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return text;
};

const Hero = () => {
  const role = useTypewriter(ROLES);

  const socials = [
    { label: 'GitHub', href: 'https://github.com/ajayku267' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ajay-kumar-65712923a' },
    { label: 'Email', href: 'mailto:ajayku267@gmail.com' },
  ];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#050816]">
      {/* 1. Underlying Glows & Background Layer */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/20 rounded-full blur-[120px] glow-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00cea8]/20 rounded-full blur-[120px] glow-orb-2" />
      <div className="noise-overlay" />

      {/* 2. Full-Screen Interactive Particles (No Masking) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* 3. Infinite Marquee Background (Massive Text) */}
      <div className="absolute top-[20%] w-full overflow-hidden select-none pointer-events-none z-0 flex flex-col gap-4 opacity-30">
        <div className="whitespace-nowrap flex">
          <div className="animate-marquee text-[10vw] font-black tracking-widest text-stroke-3-violet uppercase">
            FULL-STACK DEVELOPER • AI ENTHUSIAST • 3D CREATOR •&nbsp;
          </div>
          <div className="animate-marquee text-[10vw] font-black tracking-widest text-stroke-3-violet uppercase" aria-hidden="true">
            FULL-STACK DEVELOPER • AI ENTHUSIAST • 3D CREATOR •&nbsp;
          </div>
        </div>
      </div>

      {/* 4. Giant Layered Name */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-10">
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[14vw] sm:text-[12vw] leading-[0.8] font-black text-white uppercase drop-shadow-[0_0_30px_rgba(145,94,255,0.5)]"
        >
          AJAY <span className="text-[#00cea8]">KUMAR</span>
        </motion.h1>
      </div>

      {/* 5. The "Bento Box" Dashboard Grid (Maximalist Footer Box) */}
      <div className="absolute bottom-8 left-0 right-0 px-4 sm:px-8 max-w-7xl mx-auto z-20 pointer-events-none">

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bento-glass rounded-3xl p-6 w-full grid grid-cols-1 md:grid-cols-12 gap-6 pointer-events-auto"
        >
          {/* Status & Role Block (Wide) */}
          <div className="md:col-span-6 flex flex-col justify-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-[#00cea8] shadow-[0_0_10px_#00cea8] animate-pulse" />
              <span className="text-secondary text-xs uppercase tracking-widest font-bold">Available for New Projects</span>
            </div>
            <h2 className="text-white text-2xl sm:text-3xl font-bold h-10">
              {role}<span className="typewriter-cursor">|</span>
            </h2>
          </div>

          {/* Connect / Socials Block */}
          <div className="md:col-span-3 flex flex-col justify-center gap-4 bg-[#915eff]/10 rounded-2xl p-6 border border-[#915eff]/20 hover:bg-[#915eff]/20 transition-colors">
            <span className="text-secondary text-xs uppercase tracking-widest font-bold">Network</span>
            <div className="flex gap-4">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[#00cea8] transition-colors font-mono text-sm underline decoration-white/20 underline-offset-4"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Heavy CTAs Block */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <MagneticButton
              href="#"
              download
              className="flex-1 rounded-2xl bg-white text-black font-black uppercase text-sm flex items-center justify-center hover:bg-[#00cea8] transition-colors"
            >
              Get Resume ↗
            </MagneticButton>
            <MagneticButton
              onClick={() => window.dispatchEvent(new CustomEvent('openModal'))}
              className="flex-1 rounded-2xl bg-[#915eff] text-white font-black uppercase text-sm flex items-center justify-center hover:bg-[#7c3aed] shadow-[0_0_20px_rgba(145,94,255,0.4)] transition-all"
            >
              Hire Me ⚡
            </MagneticButton>
          </div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;