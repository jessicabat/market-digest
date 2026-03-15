import { useEffect, useRef, useState } from 'react';

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technologies = [
    { name: 'Llama 3.3 70B', subtitle: 'LLM', icon: 'ri-brain-line' },
    { name: 'Groq', subtitle: 'Inference', icon: 'ri-flashlight-line' },
    { name: 'Claude Opus 4.6', subtitle: 'Coding Agent', icon: 'ri-robot-2-line' },
    { name: 'Streamlit Cloud', subtitle: 'Frontend', icon: 'ri-window-line' },
    { name: 'GitHub Actions', subtitle: 'CI/CD', icon: 'ri-git-branch-line' },
    { name: 'feedparser', subtitle: 'RSS Ingestion', icon: 'ri-rss-line' },
    { name: 'newspaper3k', subtitle: 'Article Extraction', icon: 'ri-newspaper-line' },
    { name: 'Python', subtitle: 'Language', icon: 'ri-code-s-slash-line' },
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="text-xs font-bold uppercase mb-3"
            style={{ color: '#4A90D9', letterSpacing: '2px' }}
          >
            TECH STACK
          </div>
          <h2
            className="text-3xl md:text-[40px] font-semibold"
            style={{ color: '#1A1A2E', fontFamily: 'Inter, sans-serif' }}
          >
            Modern stack, production-ready
          </h2>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 px-5 py-3.5 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                background: '#1A1A2E',
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10">
                <i className={`${tech.icon} text-lg text-white`}></i>
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold text-white leading-tight whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[11px] text-white/50 leading-tight">
                  {tech.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
