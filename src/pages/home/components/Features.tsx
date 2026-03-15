import { useEffect, useRef, useState } from 'react';
import Lightbox from '../../../components/feature/Lightbox';

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const baseUrl = import.meta.env.BASE_URL;

  const features = [
    {
      image: `${baseUrl}images/digest.png`,
      imageAlt: 'Market Digest streaming summary showing Executive Summary, Market Implications, and Beginner-Friendly breakdown with word-by-word typing animation',
      title: 'AI Streaming Summaries',
      description:
        'Three-tier analysis — Executive Summary, Market Implications, and a Beginner-Friendly breakdown — streamed word-by-word with a typing animation for each topic.',
    },
    {
      image: `${baseUrl}images/sources.png`,
      imageAlt: 'Expanded View Validated Sources panel showing article titles, publishers, and text excerpts for claim verification',
      title: 'Full Source Transparency',
      description:
        'Every summary links back to its original articles. Expandable source panel shows title, publisher, and a 400-character excerpt so you can verify any claim.',
    },
    {
      image: `${baseUrl}images/chat.png`,
      imageAlt: "Market Digest RAG chat interface with a user question and AI response grounded in today's news articles",
      title: "Chat With Today's News",
      description:
        "Per-topic RAG chat grounded exclusively in that day's article context. Ask follow‑up questions, cross‑reference stories, or dig into details — the AI only answers from what it read.",
    },
  ];

  const allFeatureImages = features.map((f) => f.image);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="text-xs font-bold uppercase mb-4"
            style={{ letterSpacing: '2px', color: '#4A90D9' }}
          >
            FEATURES
          </div>
          <h2
            className="text-3xl md:text-[40px] font-semibold text-[#1A1A2E] leading-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Built for depth, designed for speed.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:border-[#4A90D9]/40 hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(74,144,217,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
              }}
            >
              {/* Screenshot Area */}
              <div
                className="w-full h-[220px] bg-[#1A1A2E] relative overflow-hidden flex items-center justify-center cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={feature.image}
                  alt={feature.imageAlt}
                  title={`Market Digest ${feature.title}`}
                  className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Hover overlay with expand icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/0 group-hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100">
                    <i className="ri-fullscreen-line text-xl text-white"></i>
                  </div>
                </div>
                {/* Subtle gradient overlay at bottom for blending */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="text-xl font-semibold text-[#1A1A2E] mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#6B7280] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={allFeatureImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
}
