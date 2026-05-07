import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Background3D } from './components/Background3D';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <div className="relative min-h-screen">
        <Background3D />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Process />
          <Projects />
          <Skills />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
