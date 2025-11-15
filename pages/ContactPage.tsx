import React from 'react';
import { PERSONAL_INFO } from '../constants';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import MailIcon from '../components/icons/MailIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12">
                I'm currently seeking Senior PM opportunities in Growth, Personalization, or Customer Lifecycle—particularly at companies building the future of video streaming and creator tools. I'm especially interested in roles where I can leverage AI/ML to drive measurable user outcomes.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a 
                    href={`mailto:${PERSONAL_INFO.email}`} 
                    className="flex items-center justify-center bg-slate-800 p-4 rounded-lg w-full md:w-auto hover:bg-slate-700 transition-colors"
                >
                    <MailIcon className="w-8 h-8 text-blue-400 mr-4" />
                    <div>
                        <p className="text-lg font-semibold text-white">{PERSONAL_INFO.email}</p>
                        <p className="text-sm text-slate-400">Email me</p>
                    </div>
                </a>
                <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-slate-800 p-4 rounded-lg w-full md:w-auto hover:bg-slate-700 transition-colors"
                >
                    <LinkedInIcon className="w-8 h-8 text-blue-400 mr-4" />
                    <div>
                        <p className="text-lg font-semibold text-white">LinkedIn Profile</p>
                        <p className="text-sm text-slate-400">Connect with me</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
};

export default ContactPage;
