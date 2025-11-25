import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../constants';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';
import MetricCard from '../components/MetricCard';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl text-white">Case Study Not Found</h1>
        <p className="text-slate-400 mt-4">The requested case study does not exist.</p>
        <Link to="/" className="mt-8 inline-block bg-amber-500 text-black text-sm font-medium py-3 px-6 rounded-lg hover:bg-orange-500 tracking-wider">
          Back to Home
        </Link>
      </div>
    );
  }

  const hasVideo = caseStudy.heroVideo !== undefined;
  const mediaSource = hasVideo ? caseStudy.heroVideo : caseStudy.heroImage;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-slate-950 overflow-hidden">
        {hasVideo ? (
          <video 
            src={mediaSource} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img 
            src={mediaSource} 
            alt={caseStudy.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <motion.h1 
            className="text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {caseStudy.subtitle}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/#work" className="flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-12 group">
              <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all work</span>
            </Link>
          </motion.div>

          {/* Meta Info */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-y border-[#292520] py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Company</p>
              <p className="text-white text-lg">{caseStudy.company}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">My Role</p>
              <p className="text-white text-lg">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Duration</p>
              <p className="text-white text-lg">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">Tags</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {caseStudy.tags.map(tag => (
                  <span key={tag} className="text-xs bg-[#1f1b16] text-amber-300 px-3 py-1 rounded-full border border-[#292520]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-white prose-h3:text-slate-200 prose-p:text-stone-300 prose-p:leading-loose prose-p:tracking-wide prose-a:text-amber-400 prose-strong:text-slate-100 prose-li:marker:text-amber-400 prose-li:text-stone-300 prose-li:leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2>Overview</h2>
            <p>{caseStudy.overview}</p>
            
            <h2>The Problem</h2>
            <p>{caseStudy.problem}</p>
            
            <h2>My Approach</h2>
            <ul>
              {caseStudy.approach.map((step, index) => <li key={index}>{step}</li>)}
            </ul>
            
            <h2>Challenges & Solutions</h2>
            <ul>
              {caseStudy.challenges.map((challenge, index) => <li key={index}>{challenge}</li>)}
            </ul>
          </motion.div>
          
          {/* Results */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-white text-center mb-12">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudy.results.map((result, index) => (
                <MetricCard
                  key={index}
                  metric={result.metric}
                  description={result.description}
                  index={index}
                  variant="compact"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
