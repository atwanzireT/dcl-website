import { Laptop, School, BookOpen, FileText } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-blue-900 text-4xl pb-3 mb-8 border-b-2 border-blue-800">
          PROJECTS
        </h1>
        <h2 className="text-center text-2xl p-2">
          Smart solutions for smart cities
        </h2>
        ;
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <Laptop size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center">
              Teacher ICT Training
            </h2>
            <p className="text-gray-700">
              Providing educators with skills in information and communication
              technology to enhance teaching efficiency and digital integration
              in classrooms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <School size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center">
              School Management Systems
            </h2>
            <p className="text-gray-700">
              Designing software to streamline administrative tasks such as
              attendance, grading, and communication for schools.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <BookOpen size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center">
              Digital Literacy Programs
            </h2>
            <p className="text-gray-700">
              Offering training programs to equip both young people and adults
              with essential digital skills for work and everyday life.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-center mb-4">
              <FileText size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-3 text-center">
              Paperless Classrooms
            </h2>
            <p className="text-gray-700">
              Implementing technologies that eliminate the need for paper,
              promoting the use of digital tools for teaching, assignments and
              assessments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
