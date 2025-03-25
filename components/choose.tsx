"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Choose() {
  // State to track which FAQ is open
  const [openFaq, setOpenFaq] = useState(null);

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // FAQ data
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
    <section id="choose" className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-3/5 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Us
            </h1>

            <p className="text-gray-700 mb-6">
              At Digital Chronicles Ltd, we combine innovation with expertise to
              offer digital and smart solutions tailored to modern-day
              challenges. Here&apos;s why partnering with us is the best choice
              for your business:
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium text-blue-800 hover:bg-blue-50 transition-colors"
                  >
                    <span>{`0${index + 1}. ${faq.question}`}</span>
                    {openFaq === index ? (
                      <ChevronUp className="text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-blue-600 flex-shrink-0" />
                    )}
                  </button>

                  {openFaq === index && (
                    <div className="p-4 bg-blue-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96 w-full">
              <Image
                className="object-cover"
                fill
                src="/images/img2.jpg"
                alt="Why choose Digital Chronicles Ltd"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}