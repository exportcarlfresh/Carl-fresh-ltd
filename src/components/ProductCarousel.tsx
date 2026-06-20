import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "../data/products";
import ProductCard from "./ProductCard";

const AUTO_SCROLL_PX_PER_TICK = 1;
const AUTO_SCROLL_INTERVAL_MS = 25;
const RESUME_DELAY_MS = 8000;

export default function ProductCarousel({
  products,
  onView,
}: {
  products: Product[];
  onView: (p: Product) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const id = setInterval(() => {
      if (pausedRef.current || draggingRef.current) return;
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) return;
      if (track.scrollLeft >= max - 1) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += AUTO_SCROLL_PX_PER_TICK;
      }
    }, AUTO_SCROLL_INTERVAL_MS);

    return () => clearInterval(id);
  }, [products]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const pauseAndScheduleResume = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    draggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = track.scrollLeft;
    pauseAndScheduleResume();
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    const delta = e.clientX - dragStartXRef.current;
    track.scrollLeft = dragStartScrollRef.current - delta;
  };

  const stopDragging = () => {
    draggingRef.current = false;
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    pauseAndScheduleResume();
    const card = track.querySelector(".carousel-item");
    const cardWidth = card ? card.getBoundingClientRect().width + 24 : 280;
    track.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrap">
      <button
        className="carousel-arrow carousel-arrow-left"
        aria-label="Scroll left"
        onClick={() => scrollByCard(-1)}
      >
        <ChevronLeft size={18} />
      </button>

      <div
        className="carousel-track"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        onPointerCancel={stopDragging}
        onWheel={pauseAndScheduleResume}
        onTouchStart={pauseAndScheduleResume}
      >
        {products.map((product) => (
          <div className="carousel-item" key={product.name}>
            <ProductCard product={product} onView={onView} />
          </div>
        ))}
      </div>

      <button
        className="carousel-arrow carousel-arrow-right"
        aria-label="Scroll right"
        onClick={() => scrollByCard(1)}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
