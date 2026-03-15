import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1A1A2E] shadow-[0_4px_24px_rgba(0,0,0,0.4)] border-b border-[rgba(74,144,217,0.2)]'
          : 'bg-transparent'
      }`}
      style={{ height: '72px' }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <img 
            src="https://public.readdy.ai/ai/img_res/16ad920c-dcfa-46d9-a16d-d66054417422.png" 
            alt="Market Digest Logo" 
            className="w-8 h-8"
          />
          <span className="text-white font-bold text-lg">Market Digest</span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://market-digest.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 h-11 bg-[#4A90D9] text-white rounded-xl font-medium flex items-center justify-center hover:bg-[#5BA3E8] transition-all duration-200 hover:scale-105 cursor-pointer"
            style={{ width: '140px' }}
          >
            Live App →
          </a>
          <a
            href="https://github.com/jessicabat/daily-news-product"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-6 h-11 bg-transparent text-white rounded-xl font-medium flex items-center justify-center border-2 border-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer"
            style={{ width: '120px' }}
          >
            GitHub
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center gap-1.5 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-[#1A1A2E] bg-opacity-95 z-40 flex flex-col items-center justify-center gap-8"
          style={{ top: '72px' }}
        >
          <a
            href="https://market-digest.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap w-64 h-16 bg-[#4A90D9] text-white rounded-xl font-medium flex items-center justify-center text-lg cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Live App →
          </a>
          <a
            href="https://github.com/jessicabat/daily-news-product"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap w-64 h-16 bg-transparent text-white rounded-xl font-medium flex items-center justify-center border-2 border-white text-lg cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
