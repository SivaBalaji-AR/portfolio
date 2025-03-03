import React from "react";
import Cv from '../Images/resume-ai.pdf'
const HeroSection = () => {
  return (
    <section className="container max-w-6xl w-full mx-auto px-12 py-16 bg-gray-100 rounded-xl shadow-md transition hover:shadow-lg hover:scale-105 text-center">
      <h1 className="text-6xl font-bold text-blue-600">Siva Balaji</h1>
      <p className="text-3xl text-gray-600 mt-4">Computer Engineer</p>
      
      <a 
        href= {Cv} 
        download="Siva_Balaji_CV.pdf"
        className="mt-6 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Download CV
      </a>
    </section>
  );
};

export default HeroSection;
