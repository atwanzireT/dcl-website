"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav 
      className={`w-full backdrop-blur-md transition-all duration-300 sticky top-0 z-50 ${
        scrolled ? "bg-slate-900/95 shadow-xl" : "bg-slate-900/80"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Image
                src="/logo.png"
                alt="Digital Chronicles Africa Logo"
                width={130}
                height={50}
                className="rounded-md p-1 object-contain"
              />
              <div className="absolute inset-0 bg-blue-500/10 rounded-md group-hover:bg-transparent transition-all duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <div key={link.href} className="relative">
                {link.subLinks ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                        activeDropdown === index 
                          ? "text-white bg-blue-600/20" 
                          : "text-white/90 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-56 origin-top-right rounded-xl bg-slate-800/95 backdrop-blur-lg shadow-2xl ring-1 ring-white/10 overflow-hidden"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-1">
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                className="block px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-blue-600/20 transition-colors duration-200"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 text-white/90 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                href="#contact"
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-white/90 hover:text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white/90 hover:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 pt-20 pb-8 overflow-y-auto"
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    {link.subLinks ? (
                      <div className="mb-2">
                        <button
                          onClick={() => toggleDropdown(link.href)}
                          className={`w-full flex justify-between items-center px-4 py-4 text-lg font-medium rounded-lg ${
                            activeDropdown === link.href
                              ? "text-white bg-blue-600/20"
                              : "text-white/90 hover:text-white"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              activeDropdown === link.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeDropdown === link.href && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-6 overflow-hidden"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.href}
                                href={subLink.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block px-4 py-3 text-white/80 hover:text-white text-base rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-4 text-lg font-medium text-white/90 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-white/10">
                  <Link
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full px-6 py-3 text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}