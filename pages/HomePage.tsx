import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PERSONAL_INFO, CAREER_HIGHLIGHTS, CASE_STUDIES } from '../constants';
import MetricCard from '../components/MetricCard';
import SEO, { getPersonSchema, getWebSiteSchema } from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        structuredData={[
          getPersonSchema(),
          getWebSiteSchema(),
          {
            '@type': 'ItemList',
            name: 'Featured Case Studies',
            description: 'Product management case studies by Tyler Vickers',
            itemListElement: CASE_STUDIES.map((study, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://tyvick.com/case-study/${study.slug}`,
              name: study.title,
              description: study.subtitle,
            })),
          },
        ]}
      />
      <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1410] to-[#0a0a0a]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#fbbf24_0%,_transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-3/5">
            <motion.h1
              className="text-5xl md:text-7xl text-white mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-4xl text-amber-400 mb-8 tracking-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {PERSONAL_INFO.title}
            </motion.h2>
            <motion.div
              className="flex justify-center mb-8 md:hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              <img
                src={PERSONAL_INFO.headshot}
                alt={PERSONAL_INFO.name}
                className="w-64 h-64 rounded-2xl object-cover border-2 border-amber-500/30 shadow-xl shadow-amber-500/10"
              />
            </motion.div>
            <motion.p
              className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-10 leading-loose tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {PERSONAL_INFO.valueProp}
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <button
                onClick={() => {
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 text-black text-sm font-medium py-3 px-8 rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 tracking-wider"
              >
                View My Work
              </button>
              <Link
                to="/contact"
                className="bg-[#1f1b16] text-white text-sm font-medium py-3 px-8 rounded-xl hover:bg-[#252018] border border-[#292520] transition-all duration-300 transform hover:scale-105 tracking-wider"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="md:w-2/5 hidden md:flex justify-center md:-ml-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src={PERSONAL_INFO.headshot}
              alt={PERSONAL_INFO.name}
              className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-2 border-amber-500/30 shadow-xl shadow-amber-500/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Career Highlights Section */}
      <section className="py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Career Highlights</h2>
          <p className="text-xl text-slate-400">Proven impact at scale.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CAREER_HIGHLIGHTS.map((highlight, index) => (
            <MetricCard
              key={index}
              metric={highlight.metric}
              description={highlight.description}
              details={highlight.details}
              index={index}
              variant="default"
            />
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Featured Work</h2>
          <p className="text-xl text-slate-400">Diving deep into product challenges and delivering results.</p>
        </motion.div>
        
        <div className="space-y-16">
          {CASE_STUDIES.map((study, index) => (
            <motion.div 
              key={study.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-900/80 to-slate-800/40 rounded-2xl overflow-hidden shadow-xl border border-slate-800/50 hover:border-slate-700/50 transition-all duration-500 group"
            >
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl text-white mb-3 leading-snug">{study.title}</h3>
                <p className="text-amber-400 mb-6 text-lg tracking-wide">{study.company}</p>
                <p className="mb-8 text-stone-300 leading-loose tracking-wide">{study.subtitle}</p>
                <Link 
                  to={`/case-study/${study.slug}`} 
                  className="inline-block bg-amber-500 text-black text-sm font-medium py-3 px-8 rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 tracking-wider"
                >
                  Read Case Study
                </Link>
              </div>
              <div className="h-64 lg:h-full relative overflow-hidden">
                {study.heroVideo ? (
                  <video 
                    src={study.heroVideo} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img 
                    src={study.heroImage} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-24">
        <motion.div
          className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">Let's Talk</h2>
          <p className="text-xl text-stone-300 leading-loose mb-8 max-w-xl mx-auto">
            Interested in product strategy, a career conversation, or working together? Start with a free 15-minute intro call.
          </p>
          <a
            href="https://calendly.com/tyvick/15min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-black text-sm font-medium py-3 px-10 rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 tracking-wider"
          >
            Book a Free Intro Call
          </a>
        </motion.div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
