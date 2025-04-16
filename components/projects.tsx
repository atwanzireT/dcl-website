import { Laptop, School, BookOpen, FileText } from "lucide-react";
import React from "react";

export default function Projects() {
  const projects = [
    {
      icon: Laptop,
      title: "Teacher ICT Training",
      description: "Providing educators with skills in information and communication technology to enhance teaching efficiency and digital integration in classrooms.",
      color: "sky"
    },
    {
      icon: School,
      title: "School Management Systems",
      description: "Designing software to streamline administrative tasks such as attendance, grading, and communication for schools.",
      color: "sky"
    },
    {
      icon: BookOpen,
      title: "Digital Literacy Programs",
      description: "Offering training programs to equip both young people and adults with essential digital skills for work and everyday life.",
      color: "sky"
    },
    {
      icon: FileText,
      title: "Paperless Classrooms",
      description: "Implementing technologies that eliminate the need for paper, promoting the use of digital tools for teaching, assignments and assessments.",
      color: "sky"
    }
  ];

  return (
    <section id="projects" className="w-full min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sky-900 mb-4">
            PROJECTS
          </h1>
          <div className="w-32 h-1 bg-sky-600 mx-auto mb-4"></div>
          <h2 className="text-2xl text-sky-800">
            Smart Solutions for Smart Cities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl 
                         shadow-lg border-t-4 border-sky-600 
                         transform transition-all duration-300 
                         hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center mb-6">
                <project.icon 
                  size={56} 
                  className="text-sky-600 group-hover:text-sky-700 
                             transition-colors duration-300"
                />
              </div>
              <h2 className="text-2xl font-bold text-sky-900 mb-4 text-center">
                {project.title}
              </h2>
              <p className="text-gray-700 text-center leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}