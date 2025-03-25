"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";

const cardData = [
  {
    id: 1,
    heading: "Digital Chronicles Africa",
    img: "/images/img1.jpg",
    alt: "illustration of learners using tablets",
    description: "Learners Using Tablets as Learning Tools",
  },
  {
    id: 2,
    heading: "Digital Chronicles Africa",
    img: "/images/img2.jpg",
    alt: "Learners receiving tablets",
    description: "Learners receiving tablets",
  },
  {
    id: 3,
    heading: "Digital Chronicles Africa",
    img: "/images/portfolio/img3.jpg",
    alt: "Primary school learners taking a computer class",
    description:
      "Primary school learners of Kihani Primary school taking a computer class",
  },
  {
    id: 4,
    heading: "Digital Chronicles Africa",
    img: "/images/portfolio/img4.jpg",
    alt: "Training students about digital savings",
    description: "Training Students About Saving with digital Platiforms",
  },
  {
    id: 5,
    heading: "Digital Chronicles Africa",
    img: "/images/portfolio/img6.jpg",
    alt: "Youth Start-up Academy training",
    description: "DC facilitating a Youth Start-up Academy training",
  },
  {
    id: 6,
    heading: "Digital Chronicles Africa",
    img: "/images/portfolio/img4.jpg",
    alt: "illustration of Ruyonza",
    description:
      "Ruyonza Youth VSLA Methodology training by DC- EYDCD PROJECT ",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-center font-bold text-blue-900 text-4xl pb-3 mb-4 border-b-2 border-blue-800">
          PORTFOLIO
        </h1>

        <h2 className="text-2xl text-center text-blue-800 mb-8">
          Our expertise
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.img}
                  alt={item.alt || item.description}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                />

                {/* Overlay with description on hover */}
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 flex flex-col justify-end p-4 transition-all duration-300">
                  <h3 className="text-white font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.heading}
                  </h3>
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.description}
                  </p>
                </div>

                {/* Plus icon for expanding */}
                <button
                  onClick={() => openModal(item)}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-blue-100"
                  aria-label="View larger image"
                >
                  <Plus size={20} className="text-blue-800" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div className="fixed inset-0  bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              aria-label="Close modal"
            >
              <X size={24} className="text-blue-900" />
            </button>

            <div className="relative h-96 w-full">
              <Image
                src={selectedImage.img}
                alt={selectedImage.alt || selectedImage.description}
                className="object-contain"
                fill
              />
            </div>

            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold text-blue-900">
                {selectedImage.heading}
              </h3>
              <p className="text-gray-700 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}