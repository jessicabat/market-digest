import { useEffect, useRef, useState } from 'react';
import Lightbox from '../../../components/feature/Lightbox';

export default function Problem() {
  // The ref can initially be null, so include null in the type union.
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const problemImage = `${import.meta.env.BASE_URL}images/digest.png`;

  useEffect(() => {
    // Guard against environments where IntersectionObserver is not available.
    if (typeof IntersectionObserver === 'undefined') {
      // If the API isn't available we simply show the content.
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          // Once the element is visible we can stop observing.
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup on unmount.
    return () => {
      try {
        observer.disconnect();
      } catch {
        // Silently ignore errors that may arise if the observer was already disconnected.
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section Label */}
            <div
              className="text-xs font-bold text-[#4A90D9] uppercase mb-4"
              style={{ letterSpacing: '2px' }}
            >
              THE PROBLEM
            </div>

            {/* Headline */}
            <h2
              className="text-3xl md:text-[40px] font-semibold text-[#1A1A2E] leading-tight mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              AI news summaries are fast. They&apos;re also wrong.
            </h2>

            {/* Body Text */}
            <div className="space-y-5 max-w-[560px]">
              <p className="text-[17px] text-[#6B7280]" style={{ lineHeight: '1.7' }}>
                Large language models are confident writers — but confidence isn&apos;t accuracy. When summarizing
                news, they invent market trends that don&apos;t exist, fabricate advisory opinions, and present
                speculation as fact. In our initial benchmark, only{' '}
                <strong className="text-[#1A1A2E]">44%</strong> of generated claims were actually supported by the
                source articles.
              </p>
              <p className="text-[17px] text-[#6B7280]" style={{ lineHeight: '1.7' }}>
                Market Digest solves this with a{' '}
                <strong className="text-[#1A1A2E]">negative-constraint prompt architecture</strong> — explicitly
                telling the model what NOT to do. The result:{' '}
                <strong className="text-[#1A1A2E]">98% claim accuracy</strong> across a 41-claim benchmark spanning
                Tech, Finance, General News, and World News.
              </p>
            </div>

            {/* Before vs After Comparison Stats */}
            <div
              className={`mt-10 flex items-center gap-3 sm:gap-5 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {/* Before Card */}
              <div
                className="flex-1 rounded-2xl p-5 sm:p-6 border"
                style={{
                  background: 'linear-gradient(135deg, #FEF2F2 0%, #FFF5F5 100%)',
                  borderColor: 'rgba(234,57,67,0.15)',
                }}
              >
                <div className="text-[11px] font-semibold text-[#EA3943] uppercase tracking-wider mb-2">
                  Standard Prompt
                </div>
                <div
                  className="text-4xl sm:text-5xl font-bold text-[#EA3943]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  44%
                </div>
                <div className="text-xs text-[#6B7280] mt-2">Claim Support Rate</div>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                <i className="ri-arrow-right-line text-xl text-[#9A9AB0]"></i>
              </div>

              {/* After Card */}
              <div
                className="flex-1 rounded-2xl p-5 sm:p-6 border"
                style={{
                  background: 'linear-gradient(135deg, #F0FDF4 0%, #F5FFF9 100%)',
                  borderColor: 'rgba(22,199,132,0.15)',
                }}
              >
                <div className="text-[11px] font-semibold text-[#16C784] uppercase tracking-wider mb-2">
                  Negative-Constraint Prompt
                </div>
                <div
                  className="text-4xl sm:text-5xl font-bold text-[#16C784]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  98%
                </div>
                <div className="text-xs text-[#6B7280] mt-2">Claim Support Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column - Screenshot in Device Frame */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div
              className="w-full rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#4A90D9]/50 transition-all duration-300"
              style={{
                boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              }}
              onClick={() => setLightboxOpen(true)}
            >
              {/* Browser Chrome */}
              <div className="bg-[#2A2A3E] px-4 py-3 flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex-1 mx-2">
                  <div
                    className="bg-[#1A1A2E] rounded-md px-3 py-1.5 text-xs text-[#9A9AB0] truncate"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    market-digest.streamlit.app
                  </div>
                </div>
              </div>

              {/* Screenshot */}
              <div className="w-full overflow-hidden bg-[#1A1A2E]">
                <img
                  src={problemImage}
                  alt="Market Digest Topic Digest showing Executive Summary, Market and Business Implications, and Beginner-Friendly Summary sections"
                  title="Market Digest AI News Digest View"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Caption */}
            <p className="text-center text-xs text-[#9A9AB0] mt-4">
              A real Market Digest digest — executive summary, market implications, and beginner-friendly breakdown.
            </p>
          </div>
        </div>
      </div>

      <Lightbox
        images={[problemImage]}
        currentIndex={0}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
