import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import LinkedInIcon from '../components/icons/LinkedInIcon';
import MailIcon from '../components/icons/MailIcon';
import SEO, { getPersonSchema, getWebSiteSchema, getBreadcrumbSchema } from '../components/SEO';

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
      <div className="container mx-auto px-6 py-16">
      <motion.div 
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl text-white mb-6 text-center">Let's Connect</h1>
        <p className="text-xl text-slate-400 mb-12 text-center">
          Interested in working together or just want to chat? Reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.a 
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-gradient-to-br from-[#1f1b16] to-[#252018] p-6 rounded-xl border border-[#292520] hover:border-amber-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LinkedInIcon className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="text-white">LinkedIn</span>
          </motion.a>

          <motion.a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center justify-center gap-4 bg-gradient-to-br from-[#1f1b16] to-[#252018] p-6 rounded-xl border border-[#292520] hover:border-amber-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MailIcon className="w-8 h-8 text-amber-400 group-hover:text-amber-300 transition-colors" />
            <span className="text-white">Email</span>
          </motion.a>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-gradient-to-br from-[#1f1b16] to-[#252018] p-8 rounded-2xl border border-[#292520] space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-stone-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#292520] rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-stone-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#292520] rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-stone-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#292520] rounded-lg text-white focus:outline-none focus:border-amber-500 transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-amber-500 text-black text-sm font-medium py-3 px-6 rounded-lg hover:bg-orange-500 transition-all duration-300 transform hover:scale-[1.02] tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
    </>
  );
};

export default ContactPage;
