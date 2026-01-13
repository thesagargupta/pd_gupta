"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    title: (
      <>
        Lessons and insights <br />
        <span className="text-primary-900 font-extrabold">from 8 years</span>
      </>
    ),
    desc: "Grow your business with expert CA guidance, digital tools, and a community of 500+ happy clients.",
    img: "/banner.png",
    cta: "Register Now",
    ctaLink: "/contact",
  },
  {
    title: (
      <>
        Expert CA Services <br />
        <span className="text-primary-900 font-extrabold">
          for your growth
        </span>
      </>
    ),
    desc: "Tax planning, GST, audit, and more — trusted by businesses across India.",
    img: "/about.png",
    cta: "Book Consultation",
    ctaLink: "/contact",
  },
  {
    title: (
      <>
        500+ Happy Clients <br />
        <span className="text-primary-900 font-extrabold">across India</span>
      </>
    ),
    desc: "Join our community and experience the difference with PD Gupta & CO.",
    img: "/banner.png",
    cta: "Get Started",
    ctaLink: "/contact",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // CTA click handler — popup kholega instead of navigating
  const handleCTAClick = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  // Form close karne ke liye
  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <section className="w-full bg-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8 md:gap-0 transition-all duration-700 h-80">
          {/* Left: Text */}
          <div className="flex-1 md:pr-12 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {slides[current].title}
            </h1>
            <p className="text-gray-600 mb-6 text-lg">{slides[current].desc}</p>
            {/* CTA Button — ab Link ki jagah button banaya hai taaki preventDefault kaam kare */}
            <button
              onClick={handleCTAClick}
              className="inline-block rounded-lg px-7 py-3 font-semibold text-base text-white shadow-md 
               bg-gradient-to-br from-green-500 to-green-900 
               transition-all duration-500 ease-in-out 
               hover:from-green-600 hover:to-green-800 hover:scale-105 hover:shadow-lg"
            >
              {slides[current].cta}
            </button>
          </div>
          {/* Right: Illustration */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={slides[current].img}
              alt="Hero Illustration"
              className="w-[340px] md:w-[420px] h-auto transition-all duration-700"
            />
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-primary-900" : "bg-gray-200"
              } inline-block`}
            />
          ))}
        </div>
      </section>

      {/* Popup Consultation Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} // popup ke andar click se band na ho
          >
            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              aria-label="Close"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-primary-900">
              Book a Consultation
            </h2>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+91 __________"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-br from-green-500 to-green-900 
                           hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}