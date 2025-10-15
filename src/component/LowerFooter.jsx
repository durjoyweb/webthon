import React from "react";

const testimonials = [
  { message: "Join myGov on WhatsApp." },
  { message: "Mann Ki Baat Highlights: August 2025 (PDF 13.6 MB)." },
  { message: "Participate in Clean India Movement today!" },
  { message: "Digital India Week 2025 highlights are out now!" },
];

const LowerFooter = () => {
  return (
    <div className="relative w-full overflow-hidden group touch-none bg-white border-t border-gray-200">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-3 w-[300px] md:w-[380px] flex-shrink-0"
          >
            <p className="text-sm text-gray-800 font-medium whitespace-nowrap">
              “{testimonial.message}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowerFooter;