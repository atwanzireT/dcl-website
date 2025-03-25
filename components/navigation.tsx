"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import React from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm  hover:bg-slate-700 transition-colors">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={50}
            className="rounded"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 ">
          <Link
            href="/"
            className=" text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:bg-blue-700 font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-white hover:bg-blue-700 font-medium transition-colors"
          >
            Projects
          </Link>
          {/* <Link
            href="#choose"
            className="text-white hover:bg-blue-700 font-medium transition-colors"
          >
            Why choose us
          </Link> */}
          <Link
            href="#portfolio"
            className="text-white hover:bg-blue-700 font-medium transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#contact-us"
            className="text-white  px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-2 px-4 bg-white border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
