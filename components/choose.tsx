"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Choose() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Digital Chronicles Ltd offer?",
      answer: "Digital Chronicles Ltd provides a range of managed ICT services, including IT infrastructure setup, school management systems development, digital literacy programs, internet infrastructure installation, and more.",
    },
    {
      question: "Who can benefit from Digital Chronicles Ltd services?",
      answer: "We cater to large, medium, and small businesses, as well as educational institutions and organizations looking to enhance their ICT infrastructure and productivity.",
    },
    {
      question: "Which industries do you serve?",
      answer: "We work across various industries, including education, business consultancy, finance, and any organization that requires IT and digital solutions for growth.",
    },
  ];

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
    <section id="choose" className="relative py-24 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Text Content */}
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-1/2 space-y-8"
          >
            <motion.div variants={fadeIn}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-400/20 mb-6">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
                <span className="text-blue-600 text-sm font-medium tracking-wide">
                  Our Advantages
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Why Choose Us
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "8rem" }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-slate-700 leading-relaxed"
              >
                At Digital Chronicles Ltd, we combine innovation with expertise to offer digital and smart solutions tailored to modern-day challenges. Here&rsquo;s why partnering with us is the best choice for your business:
              </motion.p>
            </motion.div>

            <motion.div variants={fadeIn} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
                >
                  <motion.button
                    onClick={() => toggleFaq(index)}
                    whileHover={{ scale: 1.02 }}
                    className="w-full flex justify-between items-center p-6 text-left"
                  >
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-blue-600 mr-4">
                        0{index + 1}
                      </span>
                      <span className="text-lg font-semibold text-slate-800">
                        {faq.question}
                      </span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="text-blue-600 w-6 h-6" />
                    ) : (
                      <ChevronDown className="text-blue-600 w-6 h-6" />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 bg-blue-50/30 border-t border-blue-100/50">
                          <p className="text-slate-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            variants={fadeIn}
            className="w-full lg:w-1/2 mt-12 lg:mt-0"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative aspect-[4/5] lg:aspect-[3/4]">
                <Image
                  src="/images/img2.jpg"
                  alt="Why choose Digital Chronicles Ltd"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-900/30"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                <h3 className="text-xl font-bold text-white mb-2">Our Expertise</h3>
                <p className="text-blue-100">Innovative solutions tailored to your business needs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}