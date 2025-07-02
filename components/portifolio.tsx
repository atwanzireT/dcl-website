"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    description: "Primary school learners of Kihani Primary school taking a computer class",
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
    description: "Ruyonza Youth VSLA Methodology training by DC- EYDCD PROJECT",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? cardData.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === cardData.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(cardData[newIndex]);
    setCurrentIndex(newIndex);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-400/20 mb-6"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
            <span className="text-blue-600 text-sm font-medium tracking-wide">
              Our Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4"
          />

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-slate-700 font-light"
          >
            Showcasing Our Expertise
          </motion.h2>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cardData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={item.img}
                  alt={item.alt || item.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={90}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.h3
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl font-bold text-white mb-2"
                  >
                    {item.heading}
                  </motion.h3>
                  <motion.p
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/90 text-sm"
                  >
                    {item.description}
                  </motion.p>
                </div>
                
                {/* Expand button */}
                <button
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  aria-label="Expand image"
                >
                  <Plus size={20} className="text-blue-800" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}