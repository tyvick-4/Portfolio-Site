
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8 text-center text-slate-400">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400 transition-colors">
            <MailIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <p className="mt-2 text-sm text-slate-500">
          Name banner by{' '}
          <a href="https://ascii.rest" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400 transition-colors">ascii.rest</a>
          , made by{' '}
          <a href="https://github.com/bas3line" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-400 transition-colors">@bas3line</a>
          {' '}(MIT).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
