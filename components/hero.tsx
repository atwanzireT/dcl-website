"use client";
import React from "react";
import Image from "next/image";
import Navigation from "@/components/navigation";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/background.jpg"
          alt="background"
          fill
          className="object-cover"
          priority
        />
     
      </div>

      {/* Navigation - positioned with higher z-index */}
      <div className="relative z-10">
        <Navigation />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-3/4 w-full flex items-center">
        <div className="container mx-auto px-6 mt-16">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Digital Chronicles Africa
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              Making information technology a part of schools and communities.
              We proactively create and maintain the IT environment.
            </p>
            <button className="bg-slate-800 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Client Logos Section - positioned at the bottom with z-index */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gray-100 bg-opacity-70 py-4">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap justify-center items-center gap-8">
            <div className="relative w-40 h-16">
              <Image
                src="/clients/client-1.png"
                alt="mastercard"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-16">
              <Image
                src="/clients/client-2.jpeg"
                alt="fc"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-40 h-16">
              <Image
                src="/clients/client-3.jpeg"
                alt="children violence"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}