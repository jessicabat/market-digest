
import { useEffect, useState, useCallback } from 'react';

interface LightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  // Keep internal index in sync with external prop
  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  // Lock body scroll when the lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsAnimating(true);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
  }, [images.length]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setActiveIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1,
    );
  }, [images.length]);

  // Keyboard navigation & close handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
      >
        <i className="ri-close-line text-2xl text-white" />
      </button>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-sm text-white/60 font-mono">
          {activeIndex + 1} / {images.length}
        </div>
      )}

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 md:left-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <i className="ri-arrow-left-s-line text-2xl text-white" />
        </button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 md:right-8 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
        >
          <i className="ri-arrow-right-s-line text-2xl text-white" />
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[activeIndex]}
          alt=""
          className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
