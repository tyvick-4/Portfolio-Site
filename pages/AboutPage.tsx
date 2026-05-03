import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';
import SEO, { getPersonSchema, getWebSiteSchema, getBreadcrumbSchema } from '../components/SEO';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title={`About ${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`}
        description={`Learn more about ${PERSONAL_INFO.name}, a Senior Product Manager with experience at Twitch and Amazon Fire TV. Skills in growth strategy, customer lifecycle, and cross-functional leadership.`}
        url="https://tyvick.com/about"
        type="profile"
        structuredData={[
          getPersonSchema('https://tyvick.com/about'),
          getWebSiteSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: 'https://tyvick.com/' },
            { name: 'About', url: 'https://tyvick.com/about' },
          ]),
        ]}
      />
      <div className="container mx-auto px-6 py-16">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl text-white mb-8 text-center">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl blur-xl" />
              <img 
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name} 
                className="relative rounded-2xl w-full shadow-2xl border-2 border-[#292520]"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/3 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h2 className="text-3xl text-white mb-4 tracking-tight">{PERSONAL_INFO.name}</h2>
              <p className="text-xl text-amber-400 mb-6 tracking-wide">{PERSONAL_INFO.title}</p>
              <p className="text-stone-300 leading-loose text-lg tracking-wide">
                {PERSONAL_INFO.valueProp}
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-stone-300 leading-loose tracking-wide">
                I thrive at the intersection of data, user empathy, and technical execution. 
                Whether it's building lifecycle models to reduce churn, launching creator tools 
                that scale to millions, or navigating complex cross-functional challenges, I bring 
                a blend of strategic thinking and hands-on execution.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl text-white mb-10 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="bg-gradient-to-br from-[#1f1b16] to-[#252018] p-8 rounded-2xl border border-[#292520] hover:border-[#3a342c] transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
              >
                <h3 className="text-xl text-amber-400 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill.name} 
                      className="text-stone-300 flex items-start"
                    >
                      <span className="text-amber-400 mr-3">•</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          id="consultation"
          className="mt-16 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-3xl text-white mb-4">Book a Free 15-Minute Intro Call</h2>
          <p className="text-stone-300 text-lg leading-loose mb-8 max-w-xl mx-auto">
            Want to talk product strategy, get career advice, or explore a collaboration? Let's start with a quick 15-minute intro call — no commitment required.
          </p>
          <motion.a
            href="https://calendly.com/tyvick/15min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-amber-500 text-black text-sm font-medium py-3 px-10 rounded-xl hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 tracking-wider"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Meeting
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default AboutPage;
