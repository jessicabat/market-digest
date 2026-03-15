import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[#0F0F1A]">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-white/5 select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-semibold text-white mt-6">Page not found</h1>
        <p className="mt-2 text-base text-[#9A9AB0] font-mono">{location.pathname}</p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-[#4A90D9] text-white rounded-xl font-medium hover:bg-[#5BA3E8] transition-all duration-200"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
