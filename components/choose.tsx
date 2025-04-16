"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Choose() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Digital Chronicles Ltd offer?",
      answer:
        "Digital Chronicles Ltd provides a range of managed ICT services, including IT infrastructure setup, school management systems development, digital literacy programs, internet infrastructure installation, and more.",
    },
    {
      question: "Who can benefit from Digital Chronicles Ltd services?",
      answer:
        "We cater to large, medium, and small businesses, as well as educational institutions and organizations looking to enhance their ICT infrastructure and productivity.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We work across various industries, including education, business consultancy, finance, and any organization that requires IT and digital solutions for growth.",
    },
  ];

  return (
    <section id="choose" className="w-full py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-3/5 space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4 tracking-tight">
              Why Choose Us
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Digital Chronicles Ltd, we combine innovation with expertise to
              offer digital and smart solutions tailored to modern-day
              challenges. Here&apos;s why partnering with us is the best choice
              for your business:
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-blue-100 rounded-xl overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-sky-900 hover:bg-blue-50 transition-colors group"
                  >
                    <span className="flex items-center">
                      <span className="text-sky-500 mr-3 font-bold">
                        0{index + 1}
                      </span>
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="text-sky-600 w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    ) : (
                      <ChevronDown className="text-sky-600 w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="p-4 bg-blue-50/50 border-t border-blue-100 animate-fade-in">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img
                className="w-full h-96 object-cover"
                src="/images/img2.jpg"
                alt="Why choose Digital Chronicles Ltd"
              />
              <div className="absolute inset-0 bg-sky-900/20 hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}