import { useEffect, useState } from 'react';
import Lightbox from '../../../components/feature/Lightbox';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroImage = 'https://static.readdy.ai/image/0fc8cb635025f591c426b84298c18e46/983c98e09831f35b2e4e64d21e09fca5.png';

  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,144,217,0.15), transparent 70%), #0F0F1A',
      }}
    >
      <div className="max-w-[880px] mx-auto text-center relative z-10">
        {/* AI-Generated Notice */}
        <div
          className={`mb-3 text-xs text-[#9A9AB0] transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ letterSpacing: '0.3px' }}
        >
          This website was AI-generated as part of the product build
        </div>

        {/* Eyebrow Badge */}
        <div
          className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{
            borderColor: 'rgba(74,144,217,0.3)',
            background: 'rgba(74,144,217,0.08)',
            transitionDelay: '100ms',
          }}
        >
          <span className="text-[13px] font-medium text-[#4A90D9]" style={{ letterSpacing: '0.5px' }}>
            AI-Powered News Intelligence
          </span>
          <span className="text-[#9A9AB0]">•</span>
          <span className="text-[13px] font-medium text-[#4A90D9]" style={{ letterSpacing: '0.5px' }}>
            Updated Daily at 9 AM ET
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`mt-6 text-4xl md:text-[56px] font-bold text-white leading-tight transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            textShadow: '0 2px 12px rgba(0,0,0,0.3)',
            transitionDelay: '300ms',
            lineHeight: '1.1',
          }}
        >
          Most LLM summaries <span className="font-semibold">hallucinate</span>. This one <span className="font-semibold">doesn't</span>.
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-5 text-base md:text-xl text-[#9A9AB0] max-w-[680px] mx-auto transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ lineHeight: '1.7', transitionDelay: '500ms' }}
        >
          Market Digest scrapes <span className="font-mono font-semibold">18</span> global news sources every morning, generates executive summaries at <span className="font-mono font-semibold">98%</span> claim accuracy, and lets you chat directly with the news — fully automated, zero human intervention.
        </p>

        {/* CTA Buttons */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <a
            href="https://market-digest.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap w-full sm:w-auto px-8 h-14 bg-[#4A90D9] text-white rounded-xl font-medium flex items-center justify-center hover:bg-[#5BA3E8] transition-all duration-200 hover:scale-105 cursor-pointer text-base"
          >
            Try the Live App →
          </a>
          <a
            href="https://github.com/jessicabat/daily-news-product"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap w-full sm:w-auto px-8 h-14 bg-transparent text-white rounded-xl font-medium flex items-center justify-center border-2 border-white hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200 cursor-pointer text-base"
          >
            View Source Code
          </a>
        </div>

        {/* Metric Pills */}
        <div
          className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-5 transition-all duration-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {[
            { label: 'CLAIM ACCURACY', value: '98%', color: '#16C784' },
            { label: 'SOURCES MONITORED', value: '18', color: 'white' },
            { label: 'DAILY PIPELINE', value: '40s', color: 'white' },
          ].map((metric, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-xl backdrop-blur-[24px] border w-full sm:w-auto"
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.12)',
                transitionDelay: `${900 + index * 100}ms`,
              }}
            >
              <div className="text-xs font-medium text-[#9A9AB0] uppercase tracking-wider mb-1">
                {metric.label}
              </div>
              <div className="text-3xl font-semibold font-mono" style={{ color: metric.color }}>
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Hero Screenshot */}
        <div
          className={`mt-12 transition-all duration-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <div
            className="max-w-[1120px] mx-auto rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#4A90D9]/50 transition-all duration-300"
            style={{
              boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
              transform: 'perspective(1000px) rotateX(2deg)',
            }}
            onClick={() => setLightboxOpen(true)}
          >
            {/* Screenshot */}
            <img
              src={heroImage}
              alt="Market Digest Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="w-6 h-6 flex items-center justify-center animate-bounce">
            <i className="ri-arrow-down-line text-2xl text-white opacity-60"></i>
          </div>
        </div>
      </div>

      <Lightbox
        images={[heroImage]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
