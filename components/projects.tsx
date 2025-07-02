"use client";
import { Laptop, School, BookOpen, FileText, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Projects = () => {
  const projects = [
    {
      icon: Laptop,
      title: "Teacher ICT Training",
      description: "Providing educators with skills in information and communication technology to enhance teaching efficiency and digital integration in classrooms.",
      color: "sky"
    },
    {
      icon: School,
      title: "School Management Systems",
      description: "Designing software to streamline administrative tasks such as attendance, grading, and communication for schools.",
      color: "blue"
    },
    {
      icon: BookOpen,
      title: "Digital Literacy Programs",
      description: "Offering training programs to equip both young people and adults with essential digital skills for work and everyday life.",
      color: "cyan"
    },
    {
      icon: FileText,
      title: "Paperless Classrooms",
      description: "Implementing technologies that eliminate the need for paper, promoting the use of digital tools for teaching, assignments and assessments.",
      color: "indigo"
    }
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
    <section id="projects" className="relative w-full py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
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
              Our Projects
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
            Smart Solutions for Smart Cities
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => {
            const colorClass = {
              sky: "from-sky-500 to-sky-600",
              blue: "from-blue-500 to-blue-600",
              cyan: "from-cyan-500 to-cyan-600",
              indigo: "from-indigo-500 to-indigo-600"
            }[project.color];

            return (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="p-8 h-full flex flex-col items-center text-center relative z-10">
                  <div className={`p-4 mb-6 rounded-xl bg-gradient-to-br ${colorClass} shadow-lg`}>
                    <project.icon 
                      size={40} 
                      className="text-white"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto w-full">
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent my-4"></div>
                    <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center justify-center mx-auto">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;