"use client";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div>
      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50">
        <Navigation />
      </div>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background.jpg"
            alt="background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Container with Animations */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full w-full flex items-center"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-xl space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight">
                Digital Chronicles Africa
              </h1>
              <p className="text-xl text-white/90 font-light leading-relaxed">
                Empowering schools and communities through innovative information technology solutions. 
                We proactively create, maintain, and transform digital environments.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-sky-900 hover:bg-sky-50 font-semibold py-4 px-8 rounded-xl 
                           transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl 
                           transform hover:-translate-y-1"
              >
                Explore Our Mission
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Client Logos Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap justify-center items-center space-x-10 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {[
              { src: "/clients/client-1.png", alt: "Mastercard" },
              { src: "/clients/client-2.jpeg", alt: "FC" },
              { src: "/clients/client-3.jpeg", alt: "Children Violence" }
            ].map((client, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative w-40 h-16 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}