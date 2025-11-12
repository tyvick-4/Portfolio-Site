import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../constants';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <section className="text-center mb-16">
          <img 
            src={PERSONAL_INFO.headshot} 
            alt="Professional Headshot" 
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-slate-700 shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h1>
          <p className="text-xl text-blue-400">{PERSONAL_INFO.title}</p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">My Story</h2>
          <div className="bg-slate-800/50 p-8 rounded-lg space-y-4 text-lg leading-relaxed">
            <p>
              I've spent 7 years building products that millions of people use every day—from helping Twitch creators grow their audiences to making Fire TV customers' content discovery experience actually useful. What drives me is taking messy, complex problems and turning them into products people love.
            </p>
            <p>
              I'm technical enough to prototype solutions in Python and evaluate AI models, but I've never forgotten that great products start with understanding people. Whether that's sitting with Twitch streamers to understand their workflow or analyzing why Fire TV customers abandon the platform, I believe the best product decisions come from combining data with genuine customer empathy.
            </p>
            <p>
              Right now, I'm looking for my next challenge in growth or customer lifecycle at companies pushing the boundaries of video streaming and the creator economy. I work best in environments where teams move fast, debates are healthy, and everyone's focused on impact over process.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white text-center mb-8">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="bg-slate-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name} className="flex items-start">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
