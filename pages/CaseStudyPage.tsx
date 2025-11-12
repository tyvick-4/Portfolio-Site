import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CASE_STUDIES } from '../constants';
import { ArrowLeftIcon } from '../components/icons/ArrowLeftIcon';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = CASE_STUDIES.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Case Study Not Found</h1>
        <p className="text-slate-400 mt-4">The requested case study does not exist.</p>
        <Link to="/" className="mt-8 inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  // Determine if this case study has a video instead of an image
  const hasVideo = caseStudy.heroVideo !== undefined;
  const mediaSource = hasVideo ? caseStudy.heroVideo : caseStudy.heroImage;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-96 bg-slate-900">
        {hasVideo ? (
          // Video Hero
          <video 
            src={mediaSource} 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          // Image Hero
          <img 
            src={mediaSource} 
            alt={caseStudy.title} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        )}
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{caseStudy.title}</h1>
          <p className="text-xl text-slate-300">{caseStudy.subtitle}</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/#work" className="flex items-center text-blue-400 hover:underline mb-8">
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to all work
          </Link>

          {/* Meta Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-y border-slate-700 py-6">
            <div>
              <p className="text-sm text-slate-400">Company</p>
              <p className="font-bold text-white">{caseStudy.company}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">My Role</p>
              <p className="font-bold text-white">{caseStudy.role}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Duration</p>
              <p className="font-bold text-white">{caseStudy.duration}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Tags</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {caseStudy.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-700 text-blue-300 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="prose prose-invert lg:prose-xl max-w-none prose-h2:text-white prose-h2:font-bold prose-h3:text-slate-200 prose-p:text-slate-300 prose-a:text-blue-400 prose-strong:text-slate-100 prose-li:marker:text-blue-400">
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
          </div>
          
          {/* Results */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg text-center">
                  <p className="text-4xl font-extrabold text-blue-400 mb-2">{result.metric}</p>
                  <p className="text-lg text-slate-300">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
