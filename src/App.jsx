import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  Skills,
  Certifications,
  Testimonials,
  GitHubStats,
  Preloader,
  CustomCursor,
  ScrollProgress,
  EarthCanvas,
  ErrorBoundary,
  HireMeModal,
  AppDock,
} from './components';

/**
 * Main App Component
 * Full 3D portfolio with Phase 1 & 2 enhancements
 */
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openModal', handleOpenModal);
    return () => window.removeEventListener('openModal', handleOpenModal);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        {/* Global Overlays & Modals */}
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <AppDock />
        <HireMeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <div className="relative z-0 bg-primary">
          {/* Hero Section with Navigation */}
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>

          {/* Main Content */}
          <About />
          <Experience />
          <Tech />
          <Skills />
          <Works />
          <Certifications />
          <GitHubStats />
          <Testimonials />

          {/* Contact + Stars background */}
          <div className="relative z-0">
            <ErrorBoundary fallbackMessage="Contact form is available below.">
              <Contact />
            </ErrorBoundary>
            <ErrorBoundary>
              <StarsCanvas />
            </ErrorBoundary>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
