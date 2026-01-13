"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const galleryImages = [
  { id: 1, src: "/banner.png", alt: "Gallery Image 1" },
  { id: 2, src: "/about.png", alt: "Gallery Image 2" },
  { id: 3, src: "/banner.jfif", alt: "Gallery Image 3" },
  { id: 4, src: "/about.png", alt: "Gallery Image 4" },
  { id: 5, src: "/banner.jfif", alt: "Gallery Image 5" },
  { id: 6, src: "/about.png", alt: "Gallery Image 6" },
  { id: 7, src: "/banner.png", alt: "Gallery Image 7" },
  { id: 8, src: "/banner.jfif", alt: "Gallery Image 8" },
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Gallery Section */}
      <section className="py-10 bg-gray-50 reveal">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center text-primary-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-gray-600 text-center mb-12">
            A glimpse of our work, events, and professional moments
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={img.id}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 bg-white cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Popup */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 reveal"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300"
            onClick={closeLightbox}
          >
            ×
          </button>

          {/* Previous Arrow */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            ‹
          </button>

          {/* Next Arrow */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:text-gray-300"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            ›
          </button>

          {/* Large Image */}
          <div className="relative max-w-5xl max-h-full p-8">
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
}