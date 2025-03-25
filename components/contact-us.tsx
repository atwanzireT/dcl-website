"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can integrate with a service like EmailJS or a backend API
    const email = "digitalchroniclesafrica@gmail.com";
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${e.target.name.value}\nMessage: ${e.target.message.value}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="w-full py-16 bg-blue-50/50">
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold text-blue-900 text-4xl mb-12">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Map
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.145932346264!2d30.656785!3d-0.615282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d8981acae25b11%3A0xa675a25aa48c1924!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2sus!4v1585747384943!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DCL Location Map"
              className="rounded-lg"
            ></iframe>
          </div> */}

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message here"
                 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition duration-300 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <h2 className="font-bold text-xl text-blue-900 mb-4">DCL</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Ruharo Road, Lugazi</li>
              <li>Mbarara, Uganda</li>
              <li>Phone: +256 704936443</li>
              <li>Email: digitalchroniclesafrica@gmail.com</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl text-blue-900 mb-4">
              Useful Links
            </h2>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                About us
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="#terms"
                className="text-gray-700 hover:text-blue-800 transition duration-300"
              >
                Terms of service
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-bold text-xl text-blue-900 mb-4">
              Our Services
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Teacher ICT Training</li>
              <li>School Management Systems Development</li>
              <li>Youth and Adult Digital Literacy Programs</li>
              <li>Paperless Classrooms</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl text-blue-900 mb-4">Follow Us</h2>
            <p className="text-gray-700 mb-4">For a Smart Experience.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-gray-800 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-pink-600 hover:text-pink-800 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-800 bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-all"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
