import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import Cloud from './canvas/Cloud';
import CanvasLoader from './Loader';
import ErrorBoundary from './ErrorBoundary';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center mb-10 text-white z-10 relative">
        <p className={styles.sectionSubText}>My technical stack</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='w-full h-[500px] flex justify-center items-center cursor-move'>
        <ErrorBoundary fallbackMessage="3D Tech Cloud unavailable">
          <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <Cloud radius={8} />
            </Suspense>
            <Preload all />
          </Canvas>
        </ErrorBoundary>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, ""); 