"use client";
import React from "react";
import Image from "next/image";
import { Target, Eye, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
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
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
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
              Our Identity
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Digital Chronicles
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 mb-24 items-center"
        >
          {/* Text Content */}
          <motion.div variants={fadeUp} className="relative">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
                Who We Are
              </h3>
              <div className="space-y-5 text-slate-700 leading-relaxed">
                <p>
                  Digital Chronicles is a forward-thinking organization that offers innovative digital and smart solutions to modern development challenges. Our managed services simplify ICT management, enhancing your institution&rsquo;s productivity.
                </p>
                <p>
                  We deliver optimal solutions for businesses of all sizes, partnering with organizations to maximize their ICT infrastructure and resources.
                </p>
              </div>


              <motion.a
                href="#more"
                whileHover={{ x: 5 }}
                className="mt-8 inline-flex items-center text-blue-600 font-medium group"
              >
                <span className="mr-2">Learn more about us</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeUp} className="relative h-96 md:h-[28rem]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl group">
              <Image
                src="/images/img1.jpg"
                alt="Digital Chronicles team"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={90}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30"></div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {/* Mission Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-3 bg-blue-100/50 rounded-lg mr-5">
                <Target className="text-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Mission</h3>
            </div>
            <p className="text-slate-700 leading-relaxed relative z-10">
              Providing improved quality and affordable smart solutions for modern day development challenges across diverse sectors and communities.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-3 bg-cyan-100/50 rounded-lg mr-5">
                <Eye className="text-cyan-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Vision</h3>
            </div>
            <p className="text-slate-700 leading-relaxed relative z-10">
              To create transformative opportunities that promote sustained economic development through innovative digital technologies across all sectors.
            </p>
          </motion.div>

          {/* Values Card */}
          <motion.div
            variants={fadeUp}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center mb-6 relative z-10">
              <div className="p-3 bg-indigo-100/50 rounded-lg mr-5">
                <Award className="text-indigo-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Our Values</h3>
            </div>
            <ul className="space-y-3 text-slate-700 leading-relaxed relative z-10">
              {['Transparency & Integrity', 'Collaborative Teamwork', 'Accountability', 'Operational Efficiency'].map((value, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1.5 mr-3">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  </div>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;