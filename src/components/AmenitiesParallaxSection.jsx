// AmenitiesParallaxSection.jsx - Working Stacking Cards

import React, { useRef, useEffect, useState } from "react";

// Import amenity images
import parkingImg from "../assets/amenities/Parking.png";
import acImg from "../assets/amenities/AC.png";
import hairDryerImg from "../assets/amenities/HairDryer.png";
import waterHeaterImg from "../assets/amenities/WaterHeater.png";
import toiletriesImg from "../assets/amenities/toiletries.png";
import dentalKitImg from "../assets/amenities/DentalKit.png";
import kettleImg from "../assets/amenities/kettle.png";
import wifiImg from "../assets/amenities/wifi.png";
import poolTableImg from "../assets/amenities/poolTable.png";
import libraryImg from "../assets/amenities/library.png";
import swimmingPoolImg from "../assets/amenities/SwimmingPool.png";
import boardGamesImg from "../assets/amenities/BoardGames.png";
import yogaMatImg from "../assets/amenities/yogaMat.png";
import babyChairImg from "../assets/amenities/babyChair.png";

const amenities = [
  {
    name: "Secure Parking",
    category: "Essential",
    description: "Complimentary on-site parking with 24/7 security",
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    image: parkingImg,
  },
  {
    name: "Air Conditioner",
    category: "Comfort",
    description: "Individual AC units for perfect ambiance",
    gradient: "from-cyan-600 via-teal-500 to-blue-500",
    image: acImg,
  },
  {
    name: "Hair Dryer",
    category: "Comfort",
    description: "Premium hair dryers in every bathroom",
    gradient: "from-pink-600 via-rose-500 to-red-500",
    image: hairDryerImg,
  },
  {
    name: "Water Heater",
    category: "Essential",
    description: "Instant hot water supply throughout the property",
    gradient: "from-orange-600 via-amber-500 to-yellow-500",
    image: waterHeaterImg,
  },
  {
    name: "Toiletries",
    category: "Comfort",
    description: "Complimentary premium toiletries and essentials",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    image: toiletriesImg,
  },
  {
    name: "Dental Kit",
    category: "Comfort",
    description: "Complete dental care amenities provided",
    gradient: "from-sky-600 via-blue-500 to-indigo-500",
    image: dentalKitImg,
  },
  {
    name: "Electric Kettle",
    category: "Convenience",
    description: "Quick boil kettle for your hot beverages",
    gradient: "from-slate-600 via-gray-500 to-zinc-500",
    image: kettleImg,
  },
  {
    name: "High-Speed WiFi",
    category: "Essential",
    description: "Fiber optic connectivity throughout the property",
    gradient: "from-teal-600 via-cyan-500 to-blue-600",
    image: wifiImg,
  },
  {
    name: "Pool Table",
    category: "Recreation",
    description: "Professional billiards table for leisure moments",
    gradient: "from-blue-700 via-indigo-600 to-purple-600",
    image: poolTableImg,
  },
  {
    name: "Reading Library",
    category: "Relaxation",
    description: "Curated collection in a serene literary sanctuary",
    gradient: "from-indigo-700 via-blue-600 to-cyan-600",
    image: libraryImg,
  },
  {
    name: "Swimming Pool",
    category: "Recreation",
    description: "Stunning outdoor pool overlooking coastal vistas",
    gradient: "from-cyan-700 via-blue-600 to-teal-600",
    image: swimmingPoolImg,
  },
  {
    name: "Board Games",
    category: "Recreation",
    description: "Premium board games and entertainment hub",
    gradient: "from-blue-600 via-cyan-600 to-teal-500",
    image: boardGamesImg,
  },
  {
    name: "Yoga Mats",
    category: "Wellness",
    description: "Equipped yoga and meditation space with premium mats",
    gradient: "from-purple-600 via-violet-500 to-blue-600",
    image: yogaMatImg,
  },
  {
    name: "Baby High Chair",
    category: "Family",
    description: "Child-friendly dining equipment available",
    gradient: "from-fuchsia-600 via-pink-500 to-rose-500",
    image: babyChairImg,
  },
];

export default function AmenitiesParallaxSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();

      // Check if section is in viewport
      const inView =
        containerRect.top < window.innerHeight && containerRect.bottom > 0;
      setIsInView(inView);
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      // Determine which card should be active
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.getBoundingClientRect().top;
        const cardHeight = card.offsetHeight;

        // Calculate scale based on position
        const stickyTop = 80; // Same as top-20 (80px)
        const distanceFromSticky = cardTop - stickyTop;

        // Scale effect: cards below the sticky position scale down
        let scale = 1;
        if (distanceFromSticky > 0) {
          const scaleAmount = Math.min(distanceFromSticky / 500, 0.1);
          scale = 1 - scaleAmount;
        }

        card.style.transform = `scale(${scale})`;
        card.style.transformOrigin = "top center";

        // Track active card
        if (cardTop <= stickyTop + 50 && cardTop >= stickyTop - 50) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-indigo-950 py-20 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-20 text-center">
        <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-2xl rounded-2xl border border-white/30 shadow-2xl mb-8">
          <div className="flex gap-1.5">
            <div className="w-1.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full animate-pulse" />
            <div
              className="w-1.5 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-1.5 h-8 bg-gradient-to-b from-teal-400 to-transparent rounded-full animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <span className="text-sm font-black uppercase tracking-[0.3em] text-white">
            Curated Amenities
          </span>
        </div>

        <h2 className="text-6xl md:text-8xl font-black leading-[0.95] mb-6 text-white drop-shadow-2xl tracking-tight">
          Crafted for Your
          <br />
          <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
            Perfect Stay
          </span>
        </h2>
        <p className="text-xl text-blue-100/90 max-w-3xl mx-auto font-medium leading-relaxed">
          Scroll to discover our thoughtfully designed spaces and premium
          facilities
        </p>
      </div>

      {/* Stacking Cards - Each card gets its own space */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="sticky top-20 transition-transform duration-300 ease-out will-change-transform"
            style={{
              zIndex: amenities.length - index,
            }}
          >
            {/* Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-500">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-[350px] md:h-[420px] overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span
                      className={`inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${amenity.gradient} text-white shadow-xl backdrop-blur-sm`}
                    >
                      {amenity.category}
                    </span>
                  </div>

                  {/* Card Number */}
                  <div className="absolute bottom-6 right-6">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/40">
                      <span className="text-xl font-black text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                  {/* Decorative Element */}
                  <div
                    className={`absolute top-8 right-8 w-24 h-24 bg-gradient-to-br ${amenity.gradient} opacity-10 rounded-full blur-2xl`}
                  />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
                      {amenity.name}
                    </h3>

                    <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add minimal spacing at the end */}
      <div className="h-32" />

      {/* Progress Indicator - Only visible in amenities section */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-300"
        style={{
          opacity: isInView ? 1 : 0,
          pointerEvents: isInView ? "auto" : "none",
        }}
      >
        <div className="bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-sm font-bold">
              {activeIndex + 1} / {amenities.length}
            </span>
            <div className="w-32 h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 rounded-full transition-all duration-300"
                style={{
                  width: `${((activeIndex + 1) / amenities.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Hint - Only visible in amenities section */}
      <div
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 transition-opacity duration-500"
        style={{
          opacity: isInView && activeIndex === 0 ? 1 : 0,
          pointerEvents: "none",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
