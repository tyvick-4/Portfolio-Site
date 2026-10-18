
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-raised border-t border-line">
      <div className="page-container py-8 text-center text-small text-muted">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="text-muted hover:text-accent transition-colors">
            <MailIcon />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        <p className="mt-2 text-ui text-muted">
          Name banner by{' '}
          <a href="https://ascii.rest" target="_blank" rel="noopener noreferrer" className="text-muted underline hover:text-accent transition-colors">ascii.rest</a>
          , made by{' '}
          <a href="https://github.com/bas3line" target="_blank" rel="noopener noreferrer" className="text-muted underline hover:text-accent transition-colors">@bas3line</a>
          {' '}(MIT).
        </p>
      </div>
    </footer>
  );
};

export default Footer;
