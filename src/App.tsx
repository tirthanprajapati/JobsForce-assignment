import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import CursorFollower from '@/components/CursorFollower';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="cuberto-theme">
      {isLoading ? (
        <div className="loading-screen">
          <div className="loading-text">
            <span className="loading-letter">C</span>
            <span className="loading-letter">U</span>
            <span className="loading-letter">B</span>
            <span className="loading-letter">E</span>
            <span className="loading-letter">R</span>
            <span className="loading-letter">T</span>
            <span className="loading-letter">O</span>
          </div>
        </div>
      ) : (
        <>
          <CursorFollower />
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Projects />
          </main>
          <Footer />
          <Toaster />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;