import { BrowserRouter } from 'react-router-dom';
import { 
  About, 
  Contact, 
  Experience, 
  Hero, 
  Navbar, 
  Tech, 
  Works, 
  StarsCanvas 
} from './components';

/**
 * Main App Component
 * Defines the overall structure of the 3D portfolio application
 * Includes navigation, hero section, about, experience, tech stack,
 * projects, and contact sections with 3D elements.
 */
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* Hero Section with Navigation */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        
        {/* Main Content Sections */}
        <About />
        <Experience />
        <Tech />
        <Works />
        
        {/* Contact Section with Stars Background */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
