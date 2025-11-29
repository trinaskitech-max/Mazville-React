import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import NavLayout from "../components/NavLayout";
import AmenitiesParallaxSection from "../components/AmenitiesParallaxSection";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";

// Helper functions for organic layout positioning
const getLayoutClasses = (layout, size) => {
  const layouts = {
    "scattered-left": "flex flex-col lg:flex-row items-start gap-12 lg:gap-20",
    "floating-right":
      "flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24",
    "offset-center":
      "flex flex-col lg:flex-row items-end gap-10 lg:gap-16 lg:ml-20",
    "diagonal-right":
      "flex flex-col lg:flex-row-reverse items-start gap-14 lg:gap-28 lg:mr-16",
    "organic-left":
      "flex flex-col lg:flex-row items-center gap-8 lg:gap-32 lg:ml-12",
    "asymmetric-bottom":
      "flex flex-col lg:flex-row items-end gap-20 lg:gap-16 lg:mr-24",
  };
  return layouts[layout] || layouts["scattered-left"];
};

const getImagePosition = (layout) => {
  const positions = {
    "scattered-left": "lg:w-2/5 transform lg:-rotate-2",
    "floating-right": "lg:w-1/2 transform lg:rotate-1",
    "offset-center": "lg:w-2/5 transform lg:rotate-3",
    "diagonal-right": "lg:w-1/2 transform lg:-rotate-1",
    "organic-left": "lg:w-2/5 transform lg:rotate-2",
    "asymmetric-bottom": "lg:w-1/2 transform lg:-rotate-3",
  };
  return positions[layout] || positions["scattered-left"];
};

const getTextPosition = (layout) => {
  const positions = {
    "scattered-left": "lg:w-3/5 lg:mt-12",
    "floating-right": "lg:w-1/2 lg:-mt-8",
    "offset-center": "lg:w-3/5 lg:-mt-16",
    "diagonal-right": "lg:w-1/2 lg:mt-20",
    "organic-left": "lg:w-3/5 lg:-mt-4",
    "asymmetric-bottom": "lg:w-1/2 lg:mb-12",
  };
  return positions[layout] || positions["scattered-left"];
};

const getImageSize = (size) => {
  const sizes = {
    small: "aspect-square w-64 h-64 md:w-80 md:h-80",
    medium: "aspect-[4/3] w-80 h-60 md:w-96 md:h-72",
    large: "aspect-[3/2] w-96 h-64 md:w-[28rem] md:h-80",
  };
  return sizes[size] || sizes["medium"];
};

const getImageRotation = (index) => {
  const rotations = [
    "rotate-2",
    "-rotate-1",
    "rotate-3",
    "-rotate-2",
    "rotate-1",
    "-rotate-3",
  ];
  return rotations[index % rotations.length];
};

// Journey items data
const items = [
  {
    title: "Coastal Dining",
    text: "Private tasting menus and open-fire dinners that celebrate regional flavours and fishermen's stories.",
    img: img12,
    color: "from-blue-500 to-cyan-500",
    side: "left",
    cta: "Reserve a Table",
  },
  {
    title: "Sunrise Riverside Walks",
    text: "Guided early-morning walks to watch the light reveal the riverbanks — gentle, mindful, and restorative.",
    img: img4,
    color: "from-cyan-500 to-teal-500",
    side: "right",
    cta: "Book a Walk",
  },
  {
    title: "Wellness & Rituals",
    text: "Yoga by the shore, herbal foot baths, and private spa treatments using local botanicals.",
    img: img5,
    color: "from-teal-500 to-blue-500",
    side: "left",
    cta: "Reserve Wellness",
  },
  {
    title: "Craft & Culture",
    text: "Meet artisans, try pottery or coastal weaving in a relaxed setting.",
    img: img6,
    color: "from-blue-600 to-sky-500",
    side: "right",
    cta: "Join a Workshop",
  },
  {
    title: "Kayak & Tide",
    text: "Gentle kayak routes guided by local paddlers, ideal for birding and quiet exploration.",
    img: img11,
    color: "from-sky-500 to-cyan-500",
    side: "left",
    cta: "Explore Kayaking",
  },
  {
    title: "Photography Walks",
    text: "Capture the light, textures and colours of Mazville's stunning coastline.",
    img: img13,
    color: "from-cyan-600 to-blue-600",
    side: "right",
    cta: "Book a Session",
  },
];

// Generate curved path for journey visualization
function curvePath(n) {
  let path = `M 50 5`;
  const stepHeight = 100 / (n + 1); // Distribute evenly across 100% height
  for (let i = 0; i < n; i++) {
    const y = 10 + (i + 1) * stepHeight;
    const c = i % 2 === 0 ? 25 : 75; // Curve control points
    const prevY = 10 + i * stepHeight;
    const midY = prevY + stepHeight / 2;
    path += ` Q ${c} ${midY}, 50 ${y}`;
  }
  return path;
}

const Experience = () => {
  const highlightsSectionRef = useRef(null);

  useEffect(() => {
    const scrollContainer = highlightsSectionRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <NavLayout>
      <main className="pt-[var(--banner-height)] overflow-hidden bg-slate-50">
        {/* Hero Section - Keep as is from your code */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden"
          style={{
            backgroundImage: `url(${img1})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* White overlay to lighten background */}
          <div className="absolute inset-0 bg-white/60"></div>

          <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-10">
            <div
              className="absolute inset-0 animate-grid-flow"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 2px, transparent 0)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="absolute top-[10%] right-[8%] w-[500px] h-[500px] bg-gradient-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-[130px] animate-float-slow" />
          <div className="absolute bottom-[10%] left-[3%] w-[600px] h-[600px] bg-gradient-to-br from-sky-500/15 to-teal-400/15 rounded-full blur-[120px] animate-float-slower" />
          <div className="absolute top-[40%] right-[35%] w-[400px] h-[400px] bg-gradient-to-br from-indigo-400/15 to-purple-300/10 rounded-full blur-[110px] animate-pulse-slow" />

          <div className="absolute top-20 left-[15%] w-2 h-20 bg-gradient-to-b from-blue-600 to-transparent rounded-full animate-fade-in opacity-40" />
          <div className="absolute bottom-32 right-[20%] w-20 h-2 bg-gradient-to-r from-cyan-600 to-transparent rounded-full animate-fade-in animation-delay-500 opacity-40" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
            <div className="grid grid-cols-12 gap-6 lg:gap-8">
              <div className="col-span-12 lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-2xl group hover:bg-white/60 hover:shadow-blue-400/40 hover:border-blue-400/60 transition-all duration-500 animate-fade-in hover:scale-105">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 animate-pulse shadow-lg shadow-blue-500/50" />
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-blue-500/50 animate-ping" />
                    </div>
                    <div className="h-8 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" />
                  </div>
                  <span className="text-sm uppercase tracking-[0.25em] font-bold text-slate-900 group-hover:text-blue-800 transition-colors duration-300">
                    Curated Coastal Experiences
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-8 animate-fade-in-up animation-delay-200">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter">
                    <span
                      className="inline-block animate-text-reveal text-slate-900 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500"
                      style={{
                        textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
                      }}
                    >
                      The Mazville
                    </span>
                    <br />
                    <span
                      className="inline-block animate-text-reveal animation-delay-300 text-blue-700 drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 relative"
                      style={{
                        textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
                      }}
                    >
                      Experience
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transform scale-x-0 animate-expand animation-delay-700" />
                    </span>
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 py-6 animate-fade-in animation-delay-400">
                    <div className="relative">
                      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-full animate-expand shadow-lg" />
                      <div className="absolute inset-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm" />
                    </div>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                      {[
                        { text: "Slow Travel", accent: "Mindful" },
                        { text: "Luminous Design", accent: "Elegant" },
                        { text: "Local Stories", accent: "Authentic" },
                      ].map(({ text, accent }, i) => (
                        <div
                          key={text}
                          className="group relative animate-fade-in"
                          style={{ animationDelay: `${(i + 4) * 150}ms` }}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                          <div className="relative px-5 py-3 bg-white/50 backdrop-blur-md rounded-xl border border-white/60 hover:bg-white/70 hover:border-blue-400/60 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="text-xs uppercase tracking-wider text-blue-600 font-bold mb-0.5">
                              {accent}
                            </div>
                            <div className="text-sm font-black text-slate-900 tracking-wide">
                              {text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative group animate-fade-in-up animation-delay-600">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <p className="relative text-lg md:text-xl text-slate-900 leading-relaxed max-w-2xl font-semibold drop-shadow-sm bg-white/60 backdrop-blur-xl p-8 rounded-3xl border-2 border-white/70 shadow-2xl group-hover:shadow-blue-200/50 group-hover:scale-[1.02] transition-all duration-500">
                    Immerse yourself in{" "}
                    <span className="font-black text-blue-800 relative inline-block group-hover:text-blue-900 transition-colors">
                      handcrafted moments
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
                    </span>
                    : river walks at dawn, chef-led coastal dinners, and gentle
                    wellness rituals — all curated around
                    <span className="font-black text-cyan-800 relative inline-block group-hover:text-cyan-900 transition-colors">
                      {" "}
                      local stories
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-600 to-transparent rounded-full" />
                    </span>{" "}
                    and seasonal flavours.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 animate-fade-in animation-delay-800">
                  <Link
                    to="/booking"
                    className="group relative inline-flex items-center gap-3 px-10 py-6 bg-blue-700 text-white rounded-2xl font-black text-lg shadow-2xl hover:shadow-blue-500/70 transition-all duration-500 overflow-hidden hover:scale-110 active:scale-95 hover:-translate-y-1 border-2 border-blue-600"
                    style={{
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      backgroundColor: "#1d4ed8",
                      boxShadow:
                        "0 10px 40px rgba(29, 78, 216, 0.5), 0 4px 20px rgba(29, 78, 216, 0.3)",
                    }}
                  >
                    {/* Solid background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl" />

                    <span className="relative z-10 flex items-center gap-3 text-white">
                      <span className="relative font-black drop-shadow-lg">
                        Book Your Journey
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-500" />
                      </span>
                      <svg
                        className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg fill-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-700 via-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity animate-pulse-slow -z-10" />
                  </Link>

                  <a
                    href="#highlights"
                    className="group px-10 py-6 bg-white/50 backdrop-blur-md text-slate-900 rounded-2xl border-2 border-white/60 hover:border-blue-400 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/70 hover:scale-110 active:scale-95 hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-50/60 to-cyan-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="relative flex items-center gap-3">
                      <span className="relative">
                        Explore More
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 rounded-full group-hover:w-full transition-all duration-500" />
                      </span>
                      <svg
                        className="w-6 h-6 group-hover:translate-y-2 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-6 p-4">
                {/* Main large image */}
                <div className="col-span-2 row-span-2 relative">
                  {/* Background glow */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-teal-500/30 rounded-[2rem] blur-2xl opacity-60 animate-pulse-slow" />

                  {/* Main container with modern border */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border-2 border-white/60">
                    <div className="aspect-[4/5] overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={img3}
                        alt="Mazville coastal view"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Smaller images with enhanced styling */}
                <div className="col-span-1 relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl blur-lg opacity-50" />

                  {/* Container with border */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-white/50">
                    <div className="aspect-square overflow-hidden rounded-md bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={img7}
                        alt="Watercolor accent"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-1 relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-xl blur-lg opacity-50" />

                  {/* Container with border */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-xl border border-white/50">
                    <div className="aspect-square overflow-hidden rounded-md bg-gradient-to-br from-gray-100 to-gray-200">
                      <img
                        src={img11}
                        alt="Kayaking"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Path Section - Enhanced Professional Design */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/30 to-cyan-50/40">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating gradient orbs */}
            <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-40 right-[15%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/15 to-teal-400/10 rounded-full blur-3xl animate-float-slower" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-300/10 to-purple-300/5 rounded-full blur-3xl animate-pulse-slow" />
          </div>

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-[0.015]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20 space-y-6">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-xl rounded-full border-2 border-blue-200/50 shadow-xl animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" />
                <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-700">
                  Curated Experiences
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in animation-delay-200">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
                  Your Journey
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  Awaits
                </span>
              </h2>

              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-300 font-medium">
                Follow the path through intimate moments, each carefully crafted
                by passionate local hosts
              </p>
            </div>

            {/* Journey Path with Tiles */}
            <div className="relative">
              {/* Animated SVG Path */}
              <svg
                className="absolute inset-0 w-full pointer-events-none z-0"
                style={{ height: "100%", minHeight: "3000px" }}
                viewBox="0 0 1000 3000"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <linearGradient
                    id="journeyGradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.7" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Main curved path flowing left to right to left */}
                <path
                  d="M 200 100 
                     C 200 200, 200 250, 400 350
                     C 600 450, 750 470, 750 520
                     
                     C 750 570, 750 620, 550 720
                     C 350 820, 250 840, 250 890
                     
                     C 250 940, 250 990, 450 1090
                     C 650 1190, 750 1210, 750 1260
                     
                     C 750 1310, 750 1360, 550 1460
                     C 350 1560, 250 1580, 250 1630
                     
                     C 250 1680, 250 1730, 450 1830
                     C 650 1930, 750 1950, 750 2000
                     
                     C 750 2050, 750 2100, 550 2200
                     C 350 2300, 250 2320, 250 2370"
                  stroke="url(#journeyGradient)"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray="15 10"
                  filter="url(#glow)"
                  className="animate-[dash-flow_20s_linear_infinite]"
                  strokeLinecap="round"
                />
                {/* Connection nodes at card positions */}
                {items.map((item, idx) => {
                  const positions = [
                    { x: 200, y: 100 }, // Card 1 - left
                    { x: 750, y: 520 }, // Card 2 - right
                    { x: 250, y: 890 }, // Card 3 - left
                    { x: 750, y: 1260 }, // Card 4 - right
                    { x: 250, y: 1630 }, // Card 5 - left
                    { x: 750, y: 2000 }, // Card 6 - right
                  ];
                  const pos = positions[idx];
                  return (
                    <g key={idx}>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="14"
                        fill="url(#journeyGradient)"
                        opacity="0.25"
                        className="animate-pulse"
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="8"
                        fill="#3b82f6"
                        opacity="0.9"
                      >
                        <animate
                          attributeName="r"
                          values="8;11;8"
                          dur="3s"
                          repeatCount="indefinite"
                          begin={`${idx * 0.5}s`}
                        />
                      </circle>
                    </g>
                  );
                })}
              </svg>

              {/* Experience Cards */}
              <div className="relative space-y-32 py-12">
                {items.map((item, idx) => {
                  const isLeft = item.side === "left";
                  const isRight = item.side === "right";

                  return (
                    <div
                      key={idx}
                      className={`flex items-center gap-8 ${
                        isLeft
                          ? "flex-col lg:flex-row justify-start lg:pr-20"
                          : isRight
                          ? "flex-col lg:flex-row-reverse justify-end lg:pl-20"
                          : "flex-col justify-center"
                      }`}
                      style={{
                        animation: `wave-float 4s ease-in-out infinite`,
                        animationDelay: `${idx * 0.5}s`,
                      }}
                    >
                      {/* Image Card */}
                      <div
                        className="relative group w-full lg:w-[420px] wave-floating"
                        style={{ animationDelay: `${idx * 0.3}s` }}
                      >
                        {/* Number Badge */}
                        <div className="absolute -top-6 -left-6 z-20">
                          <div className="relative">
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-xl opacity-60 animate-pulse`}
                            />
                            <div
                              className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                              style={{
                                background:
                                  idx === 0
                                    ? "linear-gradient(to bottom right, #3b82f6, #06b6d4)"
                                    : idx === 1
                                    ? "linear-gradient(to bottom right, #06b6d4, #14b8a6)"
                                    : idx === 2
                                    ? "linear-gradient(to bottom right, #14b8a6, #3b82f6)"
                                    : idx === 3
                                    ? "linear-gradient(to bottom right, #2563eb, #0ea5e9)"
                                    : idx === 4
                                    ? "linear-gradient(to bottom right, #0ea5e9, #06b6d4)"
                                    : "linear-gradient(to bottom right, #0891b2, #2563eb)",
                              }}
                            >
                              <span
                                className="font-black text-3xl"
                                style={{
                                  color: "#ffffff",
                                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                                }}
                              >
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Glow effect on hover */}
                        <div
                          className={`absolute -inset-4 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-30 rounded-[2.5rem] blur-2xl transition-all duration-700`}
                        />

                        {/* Image container */}
                        <div className="relative bg-white rounded-3xl p-3 shadow-2xl border-2 border-white/80 overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                          <div className="aspect-[4/3] overflow-hidden rounded-2xl relative">
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Quick info overlay */}
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                <svg
                                  className="w-3.5 h-3.5 text-cyan-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                2-3 hrs
                              </div>
                              <div className="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-slate-700 flex items-center gap-1.5">
                                <svg
                                  className="w-3.5 h-3.5 text-teal-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                  />
                                </svg>
                                Groups
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description Card */}
                      <div className="w-full lg:flex-1">
                        <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-xl border-2 border-white/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                          {/* Decorative gradient line */}
                          <div
                            className={`absolute top-0 ${
                              isRight ? "right-8" : "left-8"
                            } w-24 h-1 bg-gradient-to-r ${
                              item.color
                            } rounded-full -translate-y-1/2`}
                          />

                          {/* Content */}
                          <div className="space-y-5">
                            <h3
                              className="text-3xl lg:text-4xl font-black leading-tight"
                              style={{
                                background:
                                  idx === 0
                                    ? "linear-gradient(to right, #3b82f6, #06b6d4)"
                                    : idx === 1
                                    ? "linear-gradient(to right, #06b6d4, #14b8a6)"
                                    : idx === 2
                                    ? "linear-gradient(to right, #14b8a6, #3b82f6)"
                                    : idx === 3
                                    ? "linear-gradient(to right, #2563eb, #0ea5e9)"
                                    : idx === 4
                                    ? "linear-gradient(to right, #0ea5e9, #06b6d4)"
                                    : "linear-gradient(to right, #0891b2, #2563eb)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                              }}
                            >
                              {item.title}
                            </h3>

                            <p className="text-slate-600 text-lg leading-relaxed font-medium">
                              {item.text}
                            </p>

                            {/* Feature tags */}
                            <div className="flex flex-wrap gap-3 pt-2">
                              <div className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-200/60">
                                <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                  <div
                                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} animate-pulse`}
                                  />
                                  Available Daily
                                </span>
                              </div>
                              <div className="px-4 py-2 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-full border border-cyan-200/60">
                                <span className="text-sm font-bold text-slate-700">
                                  Expert Guides
                                </span>
                              </div>
                              <div className="px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 rounded-full border border-teal-200/60">
                                <span className="text-sm font-bold text-slate-700">
                                  All Levels
                                </span>
                              </div>
                            </div>

                            {/* CTA Button */}
                            <button
                              className="group/btn inline-flex items-center gap-3 px-8 py-4 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:gap-4"
                              style={{
                                background:
                                  idx === 0
                                    ? "linear-gradient(to right, #3b82f6, #06b6d4)"
                                    : idx === 1
                                    ? "linear-gradient(to right, #06b6d4, #14b8a6)"
                                    : idx === 2
                                    ? "linear-gradient(to right, #14b8a6, #3b82f6)"
                                    : idx === 3
                                    ? "linear-gradient(to right, #2563eb, #0ea5e9)"
                                    : idx === 4
                                    ? "linear-gradient(to right, #0ea5e9, #06b6d4)"
                                    : "linear-gradient(to right, #0891b2, #2563eb)",
                                color: "#ffffff",
                              }}
                            >
                              <span>{item.cta}</span>
                              <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2.5}
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          </div>

                          {/* Corner decoration */}
                          <div
                            className={`absolute bottom-0 ${
                              isRight
                                ? "left-0 rounded-tr-3xl"
                                : "right-0 rounded-tl-3xl"
                            } w-32 h-32 bg-gradient-to-${
                              isRight ? "tr" : "tl"
                            } ${item.color} opacity-5 pointer-events-none`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
            <svg
              width="100%"
              height="120"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="#3b82f6"
                fillOpacity="0.05"
                d="M0,160L80,154.7C160,149,320,139,480,160C640,181,800,235,960,218.7C1120,203,1280,149,1360,128L1440,107.3V320H0Z"
                className="animate-[wave-expand_12s_ease-in-out_infinite]"
              />
            </svg>
          </div>
        </section>

        {/* Amenities Section - Fan Style Parallax */}
        <AmenitiesParallaxSection />

        {/* CTA Section - COASTAL WAVE THEME WITH BACKGROUND */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={img8}
              alt="Mazville Coastal View"
              className="w-full h-full object-cover"
            />
            {/* Multi-layer gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-cyan-800/80 to-teal-900/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/40" />
          </div>

          {/* Animated Wave Backgrounds */}
          <div className="absolute inset-0 z-[1]">
            <svg
              className="absolute top-0 left-0 w-full h-32 text-white/5"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              >
                <animate
                  attributeName="d"
                  dur="8s"
                  repeatCount="indefinite"
                  values="
                  M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                  M0,64L48,74.7C96,85,192,107,288,122.7C384,139,480,149,576,138.7C672,128,768,96,864,90.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
                  M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,154.7C672,160,768,192,864,186.7C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                />
              </path>
            </svg>

            <svg
              className="absolute bottom-0 left-0 w-full h-32 text-white/5"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path
                fill="currentColor"
                d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              >
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  values="
                  M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                  M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,128C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </path>
            </svg>
          </div>

          {/* Floating Orbs with enhanced glow */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-float-slow z-[1]" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-float-slower z-[1]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl z-[1]" />

          <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
            {/* Decorative backdrop card */}
            <div className="relative">
              <div className="absolute -inset-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10" />

              <div className="relative text-center space-y-10 py-16 px-8">
                {/* Enhanced Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-teal-400/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl">
                  <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.3em] text-white font-black">
                    Your Coastal Sanctuary
                  </span>
                  <div className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                </div>

                {/* Main Heading with enhanced effects */}
                <div className="space-y-3">
                  <h3
                    className="text-5xl md:text-7xl font-black leading-tight text-white drop-shadow-2xl"
                    style={{
                      textShadow:
                        "0 4px 30px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.3)",
                    }}
                  >
                    <span className="block mb-3 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                      Begin Your
                    </span>
                    <span className="block bg-gradient-to-r from-cyan-200 via-white to-blue-200 bg-clip-text text-transparent">
                      Mazville Journey
                    </span>
                  </h3>
                </div>

                {/* Flowing Wave Divider */}
                <div className="flex justify-center py-6">
                  <svg
                    className="w-64 h-16"
                    viewBox="0 0 200 40"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0,20 Q 50,10 100,20 T 200,20"
                      fill="none"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="d"
                        dur="3s"
                        repeatCount="indefinite"
                        values="
                        M 0,20 Q 50,10 100,20 T 200,20;
                        M 0,20 Q 50,30 100,20 T 200,20;
                        M 0,20 Q 50,10 100,20 T 200,20"
                      />
                    </path>

                    <circle r="4" fill="white" opacity="0.8">
                      <animateMotion
                        dur="3s"
                        repeatCount="indefinite"
                        path="M 0,20 Q 50,10 100,20 T 200,20"
                      />
                    </circle>
                  </svg>
                </div>

                {/* Coastal Emojis with enhanced animation */}
                <div className="flex justify-center items-center gap-6">
                  {["🌊", "🏖️", "🌅", "🐚", "🌴"].map((emoji, i) => (
                    <div
                      key={i}
                      className="text-3xl md:text-4xl animate-bounce transform hover:scale-125 transition-transform cursor-default"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: "2s",
                        filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>

                {/* Description with enhanced styling */}
                <p
                  className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-semibold"
                  style={{ textShadow: "0 2px 15px rgba(0,0,0,0.4)" }}
                >
                  Where the{" "}
                  <span className="font-black text-transparent bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 bg-clip-text drop-shadow-lg">
                    river meets the sea
                  </span>
                  , your perfect coastal escape awaits in pure luxury and
                  serenity.
                </p>

                {/* Enhanced CTA Button */}
                <div className="pt-8">
                  <Link
                    to="/booking"
                    className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-white via-cyan-50 to-white text-blue-700 rounded-2xl font-black text-xl shadow-2xl hover:shadow-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 active:scale-95 border-2 border-white/30"
                    style={{
                      boxShadow:
                        "0 15px 50px rgba(0,0,0,0.4), 0 0 30px rgba(255,255,255,0.1)",
                    }}
                  >
                    <span className="relative">
                      Check Availability
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 group-hover:w-full transition-all duration-300" />
                    </span>
                    <svg
                      className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced CSS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes text-reveal {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expand {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 4rem;
            opacity: 1;
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-30px, -30px, 0);
          }
        }

        @keyframes float-slower {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(40px, -40px, 0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes grid-flow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(40px, 40px, 0);
          }
        }

        @keyframes ping-slow {
          75%,
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate3d(20px, -30px, 0) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translate3d(-10px, -60px, 0) scale(0.8);
            opacity: 0.4;
          }
          75% {
            transform: translate3d(-30px, -90px, 0) scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes floatAlongPath {
          0% {
            top: 0;
            left: 50%;
            transform: translateX(-50%) scale(0.8);
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          20% {
            left: 20%;
          }
          40% {
            left: 80%;
          }
          60% {
            left: 30%;
          }
          80% {
            left: 70%;
          }
          95% {
            opacity: 0.6;
          }
          100% {
            top: 100%;
            left: 50%;
            transform: translateX(-50%) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes dustFloat {
          0% {
            top: 0;
            transform: translateY(0px) rotate(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) rotate(45deg) scale(1.2);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-30px) rotate(90deg) scale(0.8);
            opacity: 0.3;
          }
          75% {
            transform: translateY(-15px) rotate(180deg) scale(1.1);
            opacity: 0.5;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            top: 100%;
            transform: translateY(-5px) rotate(360deg) scale(0.9);
            opacity: 0;
          }
        }

        .journey-item {
          opacity: 1;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .journey-item.journey-revealed {
          opacity: 1;
        }

        .journey-item.wave-floating {
          animation: gentle-wave-float 6s ease-in-out infinite;
          animation-fill-mode: both;
        }

        @keyframes gentle-wave-float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes wave-ping {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }

        .journey-path {
          stroke-dashoffset: 0;
          animation: dash-flow 20s linear infinite;
        }

        @keyframes dash-flow {
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes wave-expand {
          0% {
            transform: scale(0.9);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.9);
            opacity: 1;
          }
        }

        @keyframes float-badge {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-wave-expand {
          animation: wave-expand 3s ease-in-out infinite;
        }

        .animate-float-badge {
          animation: float-badge 2.5s ease-in-out infinite;
        }

        .water-level {
          transform: translateY(50%);
          opacity: 0;
          transition: transform 0.6s ease-out, opacity 0.6s ease-out;
        }

        .path-line {
          transform-origin: top;
          animation: path-reveal 2s ease-out forwards;
        }

        @keyframes path-reveal {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
          will-change: opacity;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
          will-change: opacity;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1.5s ease-in-out infinite;
          will-change: opacity;
        }

        .animate-gradient-xy {
          animation: gradient-xy 15s ease infinite;
          will-change: background-position;
        }

        .animate-grid-flow {
          animation: grid-flow 20s linear infinite;
          will-change: transform;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes bounce-horizontal {
          0%,
          100% {
            transform: translateX(0) translateY(-50%);
          }
          50% {
            transform: translateX(10px) translateY(-50%);
          }
        }

        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s ease-in-out infinite;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(148, 163, 184, 0.1);
        }

        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: rgba(148, 163, 184, 0.1);
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #3b82f6, #06b6d4, #14b8a6);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #2563eb, #0891b2, #0d9488);
        }

        .parallax-card {
          transform-style: preserve-3d;
          perspective: 1000px;
          scroll-snap-align: center;
        }

        @keyframes card-tilt {
          0%,
          100% {
            transform: perspective(1000px) rotateY(0deg);
          }
          50% {
            transform: perspective(1000px) rotateY(5deg);
          }
        }

        .parallax-card:hover {
          animation: card-tilt 0.6s ease-in-out;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }

        html {
          scroll-behavior: smooth;
        }

        img {
          content-visibility: auto;
        }

        /* Connected Journey Path Styles */
        .path-container {
          opacity: 1;
        }

        .path-segment {
          stroke-dashoffset: 100;
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3));
        }

        .path-segment.revealed {
          stroke-dashoffset: 0;
          opacity: 1;
        }

        .path-node {
          opacity: 0;
          transform: scale(0);
          transform-origin: center;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
        }

        .path-node.revealed {
          opacity: 1;
          transform: scale(1);
        }

        .journey-item {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0);
          filter: blur(0px);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15),
            0 8px 30px rgba(0, 0, 0, 0.1);
        }

        .journey-item.journey-revealed {
          opacity: 1;
          transform: translateY(0) scale(1) rotateX(0);
          filter: blur(0px);
          box-shadow: 0 20px 60px rgba(59, 130, 246, 0.15),
            0 8px 30px rgba(0, 0, 0, 0.1);
        }

        /* Particle animations */
        .particle {
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .particle.active {
          opacity: 0.8;
        }

        /* Enhanced hover effects for revealed items */
        .journey-item:hover {
          transform: translateY(-8px) scale(1.02) rotateX(0);
          box-shadow: 0 30px 80px rgba(59, 130, 246, 0.25),
            0 12px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Path glow effect */
        @keyframes pathGlow {
          0%,
          100% {
            filter: drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3));
          }
          50% {
            filter: drop-shadow(0 4px 16px rgba(59, 130, 246, 0.6));
          }
        }

        .path-segment.revealed {
          animation: pathGlow 3s ease-in-out infinite;
        }

        /* Node pulse effect */
        @keyframes nodePulse {
          0%,
          100% {
            transform: scale(1);
            filter: drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
          }
          50% {
            transform: scale(1.1);
            filter: drop-shadow(0 6px 20px rgba(59, 130, 246, 0.7));
          }
        }

        .path-node.revealed {
          animation: nodePulse 2.5s ease-in-out infinite;
        }
      `}</style>
    </NavLayout>
  );
};

export default Experience;
