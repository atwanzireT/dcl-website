import React from "react";
import Image from "next/image";
import { Target, Eye, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-sky-900 mb-4">
            ABOUT DIGITAL CHRONICLES
          </h2>
          <div className="w-32 h-1 bg-sky-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Text Column */}
          <div className="flex items-center">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-sky-600">
              <h3 className="text-2xl font-bold text-sky-600 mb-5">Who We Are</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Digital Chronicles is a forward-thinking organization that offers innovative digital and smart solutions to modern development challenges. Our managed services simplify ICT management, enhancing your institution&rsquo;s productivity.
                </p>
                <p>
                  We deliver optimal solutions for businesses of all sizes, partnering with organizations to maximize their ICT infrastructure and resources.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="h-96 w-full overflow-hidden rounded-xl shadow-2xl group">
              <Image
                src="/images/img1.jpg"
                alt="Digital Chronicles team or services"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 rounded-sm"
              />
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-5">
              <Target className="text-sky-600 mr-4" size={40} />
              <h3 className="text-2xl font-bold text-sky-800">Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Providing improved quality and affordable smart solutions for modern day development challenges across diverse sectors and communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-5">
              <Eye className="text-sky-600 mr-4" size={40} />
              <h3 className="text-2xl font-bold text-sky-800">Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To create transformative opportunities that promote sustained economic development through innovative digital technologies across all sectors.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center mb-5">
              <Award className="text-sky-600 mr-4" size={40} />
              <h3 className="text-2xl font-bold text-sky-800">Our Values</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We are committed to: Transparency, Integrity, Collaborative Teamwork, Accountability, and Operational Efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
