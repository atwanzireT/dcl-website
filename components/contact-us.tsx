"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "digitalchroniclesafrica@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${e.target.name.value}\nEmail: ${e.target.email.value}\nMessage: ${e.target.message.value}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
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
    <section id="contact" className="relative py-24 bg-gradient-to-b from-blue-50/30 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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
              Get In Touch
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
              Contact Us
            </span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mx-auto mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-xl text-slate-700 max-w-2xl mx-auto"
          >
            Have questions or want to discuss your project? Reach out to us through any of these channels.
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Map Section */}
          <motion.div 
            variants={fadeIn}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d773.9846151256695!2d30.661603225674785!3d-0.6057931826605594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d91ba65ecdc3a7%3A0xb46875ff95c875cf!2sBesania%20SACCO!5e0!3m2!1sen!2sug!4v1751457313233!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="Digital Chronicles Africa Location"
            ></iframe>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
              <h3 className="text-xl font-bold text-white mb-1">Our Location</h3>
              <p className="text-blue-100">Besania SACCO, Ruharo Road, Mbarara, Uganda</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            variants={fadeIn}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden"
          >
            <div className="p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
                  >
                    Send Message
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-10"
        >
          {/* Address */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center text-center md:text-left md:items-start"
          >
            <div className="p-3 bg-blue-100/50 rounded-full mb-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Our Address</h3>
            <p className="text-slate-600">Ruharo Road, Lugazi</p>
            <p className="text-slate-600">Mbarara, Uganda</p>
          </motion.div>

          {/* Contact */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center text-center md:text-left md:items-start"
          >
            <div className="p-3 bg-blue-100/50 rounded-full mb-4">
              <FaPhone className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Contact Us</h3>
            <p className="text-slate-600">+256 704 936 443</p>
            <p className="text-slate-600">Mon-Fri: 8am - 5pm</p>
          </motion.div>

          {/* Email */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col items-center text-center md:text-left md:items-start"
          >
            <div className="p-3 bg-blue-100/50 rounded-full mb-4">
              <FaEnvelope className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
            <p className="text-slate-600">digitalchroniclesafrica@gmail.com</p>
            <p className="text-slate-600">Support 24/7</p>
          </motion.div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {[
              { icon: <FaFacebookF size={20} />, color: "text-blue-600", hover: "bg-blue-100" },
              { icon: <FaXTwitter size={20} />, color: "text-black", hover: "bg-gray-200" },
              { icon: <FaInstagram size={20} />, color: "text-pink-600", hover: "bg-pink-100" },
              { icon: <FaWhatsapp size={20} />, color: "text-green-600", hover: "bg-green-100" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`${social.color} bg-gray-100 p-4 rounded-full hover:${social.hover} transition-all duration-300 hover:scale-110`}
                aria-label={`${social.color.split('-')[1]} social media`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}