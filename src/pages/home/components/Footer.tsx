
export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* CTA Content */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-[36px] font-semibold text-white leading-snug mb-5 max-w-[700px] mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            This started as a question: can an LLM summarize news without making things up?
          </h2>
          <p
            className="text-[17px] leading-relaxed mx-auto mb-10"
            style={{ color: '#9A9AB0', maxWidth: '500px' }}
          >
            41 claims, 4 datasets, and a lot of prompt iterations later, turns out it can. Market Digest runs every morning at 9 AM ET and I&apos;m still shipping improvements.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="https://market-digest.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-7 h-12 bg-[#4A90D9] text-white rounded-xl font-medium flex items-center justify-center hover:bg-[#5BA3E8] transition-all duration-200 hover:scale-105 cursor-pointer text-[15px]"
            >
              Open Live App →
            </a>
            <a
              href="https://github.com/jessicabat/daily-news-product"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="whitespace-nowrap px-7 h-12 bg-transparent text-white rounded-xl font-medium flex items-center justify-center border-2 border-white hover:bg-white/10 transition-all duration-200 cursor-pointer text-[15px]"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Minimal Footer Line */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-sm" style={{ color: '#9A9AB0' }}>
            Built by <span className="text-white font-medium">Jessica</span> · Data Science student · chronically curious · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
