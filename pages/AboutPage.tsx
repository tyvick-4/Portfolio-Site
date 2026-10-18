import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';
import SEO, { getPersonSchema, getWebSiteSchema, getBreadcrumbSchema } from '../components/SEO';
import Button from '../components/ui/Button';

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
      <div className="page-container py-16">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-display-2 mb-12 text-center">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src={PERSONAL_INFO.photo}
                alt={PERSONAL_INFO.name}
                className="relative rounded-xl w-full border-2 border-accent-border shadow-glow"
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
              <h2 className="text-h1 mb-3">{PERSONAL_INFO.name}</h2>
              <p className="font-display text-h3 font-semibold text-accent mb-6">{PERSONAL_INFO.title}</p>
              <p className="text-body-lg text-muted">
                {PERSONAL_INFO.valueProp}
              </p>
            </div>
            
            <div className="pt-6">
              <p className="text-body text-muted">
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
          <h2 className="mb-10 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((category, categoryIndex) => (
              <motion.div 
                key={category.title}
                className="bg-surface p-8 rounded-xl border border-line shadow-card hover:border-line-strong transition-colors duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + categoryIndex * 0.1 }}
              >
                <h3 className="text-h3 mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li 
                      key={skill.name} 
                      className="text-body text-muted flex items-start"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-[0.7em] mr-3 bg-accent rounded-full" aria-hidden="true" />
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
          className="mt-16 bg-accent-soft border border-accent-border rounded-xl p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="text-h2 mb-4">Book a Free 15-Minute Intro Call</h2>
          <p className="text-body-lg text-muted mb-8 max-w-xl mx-auto">
            Want to talk product strategy, get career advice, or explore a collaboration? Let's start with a quick 15-minute intro call — no commitment required.
          </p>
          <Button
            href="https://calendly.com/tyvick/15min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Schedule a Meeting
          </Button>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default AboutPage;
