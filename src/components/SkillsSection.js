import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGithub } from "react-icons/fa";
import { 
    SiMongodb, SiTailwindcss, SiTensorflow, SiJavascript, SiSpringboot, SiFastapi, SiExpress 
  } from "react-icons/si";
  import { TbBrain } from "react-icons/tb";

const skills = [
    { name: "React", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "SQL & Databases", icon: <FaDatabase className="text-gray-500" /> },
    { name: "Git & GitHub", icon: <FaGithub className="text-gray-800" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "FastAPI", icon: <SiFastapi className="text-teal-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "LangChain", icon: <TbBrain className="text-purple-500" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <div className="text-5xl">{skill.icon}</div>
              <p className="mt-3 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
