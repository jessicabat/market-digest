
import { useEffect, useRef, useState } from 'react';

export default function Performance() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    accuracy: 0,
    ttft: 0,
    pipeline: 0,
    sources: 0,
    topics: 0,
    articles: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
          animateNumbers();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      accuracy: 98,
      ttft: 0.8,
      pipeline: 40,
      sources: 18,
      topics: 7,
      articles: 35,
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts({
        accuracy: Math.floor(targets.accuracy * easeOut),
        ttft: parseFloat((targets.ttft * easeOut).toFixed(1)),
        pipeline: Math.floor(targets.pipeline * easeOut),
        sources: Math.floor(targets.sources * easeOut),
        topics: Math.floor(targets.topics * easeOut),
        articles: Math.floor(targets.articles * easeOut),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);
  };

  const metrics = [
    {
      label: 'CLAIM ACCURACY',
      value: `${counts.accuracy}%`,
      color: '#16C784',
      subtitle: 'Up from 44% — LLM-as-a-judge verified',
    },
    {
      label: 'TTFT LATENCY',
      value: `${counts.ttft}s`,
      color: 'white',
      subtitle: 'Avg. time to first token via Groq LPU',
    },
    {
      label: 'PIPELINE RUNTIME',
      value: `${counts.pipeline}s`,
      color: 'white',
      subtitle: 'Full bot execution in GitHub Actions CI',
    },
    {
      label: 'SOURCES MONITORED',
      value: counts.sources.toString(),
      color: 'white',
      subtitle: 'Unique publishers across 28 RSS feeds',
    },
    {
      label: 'TOPICS COVERED',
      value: counts.topics.toString(),
      color: 'white',
      subtitle: 'Tech, AI, Finance, World News, Business, Stock Market, Crypto',
    },
    {
      label: 'ARTICLES PER RUN',
      value: counts.articles.toString(),
      color: 'white',
      subtitle: '5 per topic, round-robin source mixing',
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
        {/* Section Label */}
        <div
          className={`text-center mb-4 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="text-xs font-semibold text-[#4A90D9] uppercase"
            style={{ letterSpacing: '2px' }}
          >
            Performance
          </span>
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-[40px] font-semibold text-white leading-tight">
            The numbers behind the pipeline.
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-10 rounded-2xl backdrop-blur-[24px] border transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'rgba(255,255,255,0.06)',
                borderColor: 'rgba(255,255,255,0.12)',
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Label */}
              <div className="text-[13px] font-medium text-[#9A9AB0] uppercase tracking-wider mb-4">
                {metric.label}
              </div>

              {/* Value */}
              <div className="text-5xl font-bold font-mono mb-3" style={{ color: metric.color }}>
                {metric.value}
              </div>

              {/* Subtitle */}
              <div className="text-sm text-[#9A9AB0] leading-relaxed">{metric.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
