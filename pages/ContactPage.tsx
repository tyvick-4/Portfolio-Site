import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import MailIcon from '../components/icons/MailIcon';
import SEO, { getPersonSchema, getWebSiteSchema, getBreadcrumbSchema } from '../components/SEO';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes - in production, this would send to a backend
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Contact from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <SEO
        title={`Contact ${PERSONAL_INFO.name} - Get in Touch`}
        description={`Reach out to ${PERSONAL_INFO.name} for product management opportunities, collaborations, or inquiries. Connect via LinkedIn or email.`}
        url="https://tyvick.com/contact"
        structuredData={[
          {
            '@type': 'WebPage',
            '@id': 'https://tyvick.com/contact',
            name: `Contact ${PERSONAL_INFO.name}`,
            description: `Reach out to ${PERSONAL_INFO.name} for product management opportunities, collaborations, or inquiries.`,
            url: 'https://tyvick.com/contact',
            isPartOf: { '@id': 'https://tyvick.com/#website' },
            about: { '@id': 'https://tyvick.com/#person' },
          },
          getPersonSchema(),
          getWebSiteSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: 'https://tyvick.com/' },
            { name: 'Contact', url: 'https://tyvick.com/contact' },
          ]),
        ]}
      />
      <div className="page-container py-16">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-display-2 mb-6 text-center">Let's Connect</h1>
        <p className="text-body-lg text-muted mb-12 text-center">
          Interested in working together or just want to chat? Reach out!
        </p>

        <motion.div
          className="bg-accent-soft border border-accent-border rounded-xl p-8 md:p-10 mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="text-h3 mb-3">Book a Free 15-Minute Intro Call</h2>
          <p className="text-body text-muted mb-6">Schedule a quick 15-minute intro call to discuss product strategy, career advice, or potential collaborations — no commitment required.</p>
          <Button
            href="https://calendly.com/tyvick/15min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a Meeting
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-surface p-6 rounded-md border border-line shadow-card hover:border-accent-border transition-colors duration-250 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LinkedInIcon className="w-8 h-8 text-accent group-hover:text-accent-hover transition-colors" />
            <span className="text-body text-ink">LinkedIn</span>
          </motion.a>

          <motion.a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center justify-center gap-4 bg-surface p-6 rounded-md border border-line shadow-card hover:border-accent-border transition-colors duration-250 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MailIcon className="w-8 h-8 text-accent group-hover:text-accent-hover transition-colors" />
            <span className="text-body text-ink">Email</span>
          </motion.a>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-surface p-8 rounded-xl border border-line shadow-card space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-small text-muted mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3 bg-bg border border-line rounded-sm text-ink focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-small text-muted mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3.5 py-3 bg-bg border border-line rounded-sm text-ink focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-small text-muted mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3.5 py-3 bg-bg border border-line rounded-sm text-ink focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <Button type="submit" className="w-full hover:scale-[1.02]!">
            Send Message
          </Button>
        </motion.form>
      </motion.div>
    </div>
    </>
  );
};

export default ContactPage;
