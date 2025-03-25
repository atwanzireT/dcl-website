import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-blue-800 text-center font-bold text-4xl md:text-5xl mb-3">
            ABOUT US
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Text Column */}
          <div className="bg-gray-50/50 p-6 rounded-lg ">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Digital Chronicles is a forward-thinking organisation that offers
              digital and smart solutions to modern day development challenges.
              Our managed services will simplify the management of your ICT,
              making your institution more productive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We deliver the best possible solutions for businesses of all
              sizes. DIGITAL CHRONICLES is the perfect partner for organizations
              who want to get the most from their ICT infrastructure and
              resources.
            </p>
          </div>

          {/* Image Column - with increased height */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md">
              <Image
                src="/images/img1.jpg"
                alt="Digital Chronicles team or services"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Providing improved quality and affordable smart solutions for
              modern day development challenges to a wide range of sectors and
              communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To create opportunities that promote sustained economic
              development, using digital technologies across all sectors and
              demographic segments.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-3">Our Values</h3>
            <p className="text-gray-700 leading-relaxed">
              We strive to maintain the following values while rendering the
              best service: Transparency, Integrity, Teamwork, Accountability
              and Efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
