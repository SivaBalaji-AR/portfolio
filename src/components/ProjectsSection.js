import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsQuestionCircle, BsPerson } from "react-icons/bs";
import quizia from "../Images/Quizia.png";
import scholarchat from "../Images/ScholarChat.png";

const projects = [
  {
    title: "Quizia",
    link: "https://github.com/SivaBalaji-AR/QUIZIA-Complete.git",
    online_deployment: "https://quizia-lac.vercel.app/",
    description: "Quiz app which integrates GenAI and Data Analytics to enhance learning experience",
    role: "Creator",
    image: quizia,
  },
  {
    title: "ScholarChat",
    link: "https://github.com/SivaBalaji-AR/ScholarChat.git",
    description: "RAG-based chatbot, which is 100% offline.",
    role: "Creator",
    image: scholarchat,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Project Showcase</h2>
        <p className="text-gray-600 text-center mb-12">Keep thinking, keep building, keep learning.</p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""} gap-10`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to the project <FaExternalLinkAlt size={12} />
                </a>

                {project.online_deployment && (
                  <a
                    href={project.online_deployment}
                    className="text-green-600 hover:text-green-800 flex items-center gap-1 mt-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <FaExternalLinkAlt size={12} />
                  </a>
                )}

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <BsQuestionCircle className="text-blue-600 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-gray-800">Description</p>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <BsPerson className="text-blue-600 mt-1" size={18} />
                    <div>
                      <p className="font-semibold text-gray-800">Role</p>
                      <p className="text-gray-600">{project.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
