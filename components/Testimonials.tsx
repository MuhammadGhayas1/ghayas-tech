"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Working with Ghayas Tech felt effortless.",
    name: "Michael Anderson",
    location: "Toronto, ON"
  },
  {
    quote: "Attention to detail exceeded our expectations.",
    name: "Sarah Whitman",
    location: "San Francisco, CA"
  },
  {
    quote: "Everything felt intentional, calm, and well-thought-out.",
    name: "Daniel Roberts",
    location: "Vancouver, BC"
  },
  {
    quote: "The experience was smooth from start to finish.",
    name: "Emily Carter",
    location: "New York, NY"
  },
  {
    quote: "Performance and clarity were clearly top priorities.",
    name: "James Miller",
    location: "Austin, TX"
  },
  {
    quote: "They understood what mattered before we explained it.",
    name: "Olivia Thompson",
    location: "Seattle, WA"
  },
  {
    quote: "The final result felt premium and future-proof.",
    name: "Ryan Patel",
    location: "Mississauga, ON"
  },
  {
    quote: "A rare balance of design sensitivity and engineering discipline.",
    name: "Laura Bennett",
    location: "Boston, MA"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsVisible(true);
      }, 400);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="section bg-[var(--bg-secondary)] border-t border-white/10" id="testimonials">
      <div className="page-grid max-w-3xl">
        <div className="text-center space-y-4 min-h-[120px] flex flex-col justify-center">
          <p
            className="body text-ink transition-opacity duration-[400ms] ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              fontSize: "30px",
              lineHeight: "1.6",
              fontWeight: "400",
              letterSpacing: "0",
              fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Inter, Arial, sans-serif'
            }}
          >
            "{current.quote}"
          </p>
          <div
            className="space-y-1 transition-opacity duration-[400ms] ease-out"
            style={{ opacity: isVisible ? 1 : 0 }}
          >
            <p className="small text-mute">— {current.name}</p>
            <p className="small text-mute">{current.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

