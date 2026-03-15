import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Performance from './components/Performance';
import TechStack from './components/TechStack';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F0F1A]">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Performance />
      <TechStack />
      <Footer />
    </div>
  );
}
