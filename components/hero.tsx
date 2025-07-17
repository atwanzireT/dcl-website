"use client";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, BookOpen, BarChart2, ArrowRight, ChevronRight } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <Navigation/>
      <div className="relative min-h-screen w-full overflow-hidden ">
        {/* Background with Light Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ y: yPos }} className="absolute inset-0">
            <Image
              src="/images/background.jpg"
              alt="Digital transformation background"
              fill
              className="object-cover"
              priority
              quality={100}
            />
          </motion.div>
          
          {/* Light Gradient Overlay */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px]" />
          {/* Subtle Animated Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: [0, 0.2, 0],
                  y: [0, Math.random() * 100 + 50],
                  x: Math.random() * 100 - 50
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center mt-24 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-400/30 backdrop-blur-sm shadow-sm"
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse" />
                  <span className="text-blue-600 text-sm font-medium tracking-wide">
                    For Knowledge And Innovation
                  </span>
                </motion.div>

                {/* Main Heading */}
                <div className="space-y-4">
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
                  >
                    <span className="bg-gradient-to-r font-extrabold from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      Digital Chronicles Africa
                    </span>
                    <br />
                    <span className="text-blue-700 text-xl md:text-2xl font-light">
                      Transforming Africa Through Technology
                    </span>
                  </motion.h1>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "6rem" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  />
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-xl font-normal text-gray-700 leading-relaxed max-w-xl bg-white/20 p-2 rounded-2xl"
                >
                  Pioneering innovative IT solutions that empower educational institutions and communities across Africa. We architect, implement, and optimize digital ecosystems for sustainable growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-2"
                >
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl
                      hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25
                      border border-blue-500/50 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Explore Our Solutions
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-8 py-3 border-2 border-blue-600/30 text-blue-600 font-semibold rounded-xl
                      hover:bg-blue-50 hover:border-blue-600/50 transition-all duration-300 flex items-center"
                  >
                    View Portfolio
                    <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </motion.div>

             
              </motion.div>

              {/* Right Visual Element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="hidden lg:block relative"
              >
                <div className="relative">
                  {/* Floating Cards */}
                  <div className="space-y-6">
                    {[
                      { title: "Cloud Infrastructure", icon: <Cloud size={24} className="text-blue-600" />, status: "Active" },
                      { title: "Digital Learning", icon: <BookOpen size={24} className="text-blue-600" />, status: "Deployed" },
                      { title: "Data Analytics", icon: <BarChart2 size={24} className="text-blue-600" />, status: "Optimized" },
                    ].map((card, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.05, x: -10 }}
                        className="bg-white backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-sm
                          hover:shadow-md transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                              {card.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{card.title}</div>
                              <div className="text-sm text-gray-500">{card.status}</div>
                            </div>
                          </div>
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-4">
              Trusted by Leading Organizations
            </p>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "8rem" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-12 lg:gap-16"
          >
            {[
              { src: "/clients/client-1.png", alt: "Mastercard" },
              { src: "/clients/client-2.jpeg", alt: "FC" },
              { src: "/clients/client-3.jpeg", alt: "Children Violence Prevention" },
            ].map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative w-40 h-20 transition-all duration-500"
              >
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}