"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Carousel data - using local images from public/image folder
const carouselSlides = [
  {
    image: "/image/web4.jpg",
    title: "Modern Web Design",
  },
  {
    image: "/image/web5.jpg",
    title: "E-Commerce Solutions",
  },
  {
    image: "/image/web6.jpg",
    title: "Business Systems",
  },
  {
    image: "/image/web4.jpg",
    title: "SEO Optimized",
  },
  {
    image: "/image/web3.jpg",
    title: "Mobile-First Design",
  },
  {
    image: "/image/web2.jpg",
    title: "Custom Dashboards",
  },
];

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9/16", maxHeight: "500px" }}>
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Image - visible at top */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${carouselSlides[currentSlide].image}')` }}
          />

          {/* Gradient overlay - stronger at bottom for text */}
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

          {/* Title at bottom with gradient background */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.h3
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-xl md:text-2xl font-bold text-white text-center"
            >
              {carouselSlides[currentSlide].title}
            </motion.h3>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/70 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="slide-section pt-20 relative overflow-hidden">
      {/* Tech Neon Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Gradient Mask - Dark neon blacky transparent theme */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/50" />
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/85" />

      {/* Decorative Neon Glow Effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/15 rounded-full blur-[80px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              We Build Beyond Limits{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">Sri Lankan Businesses</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-300 mb-6 max-w-xl"
            >
              We are a professional design and development team creating fast,
              secure, and future-ready websites that help businesses grow —
              built with care, quality, and long-term value in mind.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-sm text-gray-400 mb-8 font-medium"
            >
              No shortcuts &bull; No low-quality templates &bull; Built for real
              businesses
            </motion.p>
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-8 py-4 bg-linear-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-blue-500 transition-all text-center shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Get a Free Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#work"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 hover:border-white/30 transition-all text-center"
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Carousel */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            <motion.div
              variants={fadeInRight}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <HeroCarousel />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
