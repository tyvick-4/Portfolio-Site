import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO, CAREER_HIGHLIGHTS, CASE_STUDIES } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center text-center md:text-left min-h-[60vh]">
        <div className="md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {PERSONAL_INFO.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-400 mb-6">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8">
            {PERSONAL_INFO.valueProp}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#work" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              View My Work
            </a>
            <Link to="/contact" className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
            <img 
                src={PERSONAL_INFO.headshot} 
                alt="Professional Headshot" 
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-slate-700"
            />
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Career Highlights</h2>
            <p className="text-lg text-slate-400 mt-2">Proven impact at scale.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAREER_HIGHLIGHTS.map((highlight, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <p className="text-5xl font-extrabold text-blue-400 mb-2">{highlight.metric}</p>
              <p className="text-xl font-semibold text-white mb-2">{highlight.description}</p>
              <p className="text-slate-400">{highlight.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
            <p className="text-lg text-slate-400 mt-2">Diving deep into product challenges and delivering results.</p>
        </div>
        <div className="space-y-16">
          {CASE_STUDIES.map((study) => (
            <div key={study.slug} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-slate-800/50 rounded-lg overflow-hidden shadow-xl">
              <div className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-blue-400 mb-4">{study.company}</p>
                <p className="mb-6">{study.subtitle}</p>
                <Link to={`/case-study/${study.slug}`} className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 inline-block">
                  Read Case Study
                </Link>
              </div>
              <div className="h-64 lg:h-full">
                {study.heroVideo ? (
                  <video 
                    src={study.heroVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover"/>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
