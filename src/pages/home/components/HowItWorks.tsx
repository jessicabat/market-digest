
import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  // Use a non‑generic ref to avoid JSX parsing issues in plain‑JS files
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: '01',
      icon: 'ri-earth-line',
      title: 'Ingest',
      description:
        '28 RSS feeds from 18 sources — TechCrunch, Reuters, BBC, CNBC, and more — are parsed via feedparser. Round-robin selection ensures no single source dominates.',
    },
    {
      number: '02',
      icon: 'ri-file-text-line',
      title: 'Extract',
      description:
        'newspaper3k scrapes and parses full article HTML into clean text, capped at 2,000 characters per article to stay within LLM context budgets.',
    },
    {
      number: '03',
      icon: 'ri-brain-line',
      title: 'Summarize',
      description:
        'Llama 3.3 70B via Groq’s LPU generates three‑tier summaries — Executive, Market Implications, and Beginner‑Friendly — constrained by negative‑prompt rules that eliminate hallucination.',
    },
    {
      number: '04',
      icon: 'ri-rocket-line',
      title: 'Deliver',
      description:
        'GitHub Actions commits the output daily at 9 AM ET. Streamlit Cloud auto‑deploys. Users get streaming summaries and per‑topic RAG chat — zero manual steps.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 px-8"
      style={{
        background:
          'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,144,217,0.15), transparent 70%), #0F0F1A',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div
          className={`text-center max-w-[720px] mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="text-xs font-bold text-[#4A90D9] uppercase mb-3"
            style={{ letterSpacing: '2px' }}
          >
            THE PIPELINE
          </div>
          <h2
            className="text-3xl md:text-[40px] font-semibold text-white leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            From RSS feed to executive briefing in 40 seconds.
          </h2>
        </div>

        {/* Process Steps - Desktop Horizontal */}
        <div className="hidden md:grid grid-cols-4 gap-6 relative">
          {/* Connecting Line */}
          <div
            className="absolute top-[52px] left-[12%] right-[12%] h-0.5"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, #4A90D9 10%, #4A90D9 90%, transparent 100%)',
              opacity: 0.35,
            }}
          ></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 180}ms` }}
            >
              {/* Step Number Circle */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center relative z-10"
                  style={{
                    background: 'rgba(74,144,217,0.12)',
                    border: '2px solid rgba(74,144,217,0.3)',
                  }}
                >
                  <div
                    className="text-2xl font-bold text-[#4A90D9]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {step.number}
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center mt-1">
                    <i className={`${step.icon} text-2xl text-white/80`}></i>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div
                className="p-5 rounded-2xl backdrop-blur-[24px] border hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.1)',
                }}
              >
                <h3
                  className="text-lg font-semibold text-white mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#9A9AB0] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps - Mobile Vertical */}
        <div className="md:hidden relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[31px] top-8 bottom-8 w-0.5"
            style={{ background: 'rgba(74,144,217,0.25)' }}
          ></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-5">
                  {/* Number Circle */}
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center relative z-10"
                    style={{
                      background: 'rgba(74,144,217,0.12)',
                      border: '2px solid rgba(74,144,217,0.3)',
                    }}
                  >
                    <div
                      className="text-lg font-bold text-[#4A90D9]"
                      style={{ fontFamily: 'JetBrains Mono, monospace' }}
                    >
                      {step.number}
                    </div>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${step.icon} text-base text-white/80`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-5 rounded-2xl backdrop-blur-[24px] border"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      borderColor: 'rgba(255,255,255,0.1)',
                    }}
                  >
                    <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-[#9A9AB0] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
