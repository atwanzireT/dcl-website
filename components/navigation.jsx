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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" }
  ];

  const toggleDropdown = (index) => {
    if (isMobile) {
      // On mobile, close menu when a link is clicked
      setIsMenuOpen(false);
    }
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.nav
      className={`w-full backdrop-blur-md transition-all duration-300 fixed top-0 z-50 ${scrolled ? "bg-white/90 shadow-lg" : "bg-white/95"
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
                <Link
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 text-gray-800 hover:text-blue-600 hover:bg-blue-50"
                >
                  {link.label}
                </Link>
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
            className="lg:hidden p-2 rounded-md text-gray-800 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className="text-gray-800 hover:text-blue-600" />
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
            className="lg:hidden fixed inset-0 bg-white backdrop-blur-lg z-40 pt-20 pb-8"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <nav className="flex-1 flex flex-col justify-between">
                {/* Main Links - Takes available space */}
                <div className="space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-4 text-lg font-medium text-gray-800 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* CTA Button - Fixed at bottom */}
                <div className="pt-4 mt-auto border-t border-gray-200">
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