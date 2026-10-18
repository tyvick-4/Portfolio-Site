import React from 'react';
import { motion } from 'motion/react';
import { Banner } from 'ascii.rest/react';
import { PERSONAL_INFO, CAREER_HIGHLIGHTS, CASE_STUDIES } from '../constants';
import MetricCard from '../components/MetricCard';
import LazyVideo from '../components/LazyVideo';
import SEO, { getPersonSchema, getWebSiteSchema } from '../components/SEO';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO
        structuredData={[
          getPersonSchema(),
          getWebSiteSchema(),
          {
            '@type': 'ItemList',
            name: 'Featured Case Studies',
            description: 'Product management case studies by Tyler Vickers',
            itemListElement: CASE_STUDIES.map((study, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              url: `https://tyvick.com/case-study/${study.slug}`,
              name: study.title,
              description: study.subtitle,
            })),
          },
        ]}
      />
      {/* Hero Section (design-system "radial-glow" hero) */}
      <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex items-center">
        <div className="absolute inset-0 bg-[image:var(--glow-radial)]" aria-hidden="true" />
        <div className="page-container py-20 relative z-10 flex flex-col md:flex-row items-center md:items-center gap-12">
          <div className="md:w-3/5">
            {/* Animated name banner by ascii.rest (MIT, @bas3line), credited in the footer.
                Decorative on desktop; the h1 below keeps the name as real text. */}
            {/* The glint only swaps the fill character for a denser one, so a wide solid
                glint over the default "▓" letters keeps the sweep visible on the dark hero. */}
            <motion.div
              className="hidden md:block mb-6"
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Banner
                text={PERSONAL_INFO.name}
                font="mixed"
                shadow="rounded"
                color={['#fcd34d', '#f59e0b', '#ea580c', '#b91c1c']}
                shadowColor="#1a2338"
                glint={{ width: 6 }}
                speed={2}
              />
            </motion.div>
            <motion.h1
              className="mb-4 text-center md:text-left md:sr-only"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {PERSONAL_INFO.name}
            </motion.h1>
            <motion.h2
              className="text-h2 text-accent mb-6 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {PERSONAL_INFO.title}
            </motion.h2>
            {/* The headshot is the mobile LCP element, so it paints immediately instead of
                fading in; index.html preloads it. */}
            <div className="flex justify-center mb-8 md:hidden">
              <img
                src={PERSONAL_INFO.headshot}
                alt={PERSONAL_INFO.name}
                width={256}
                height={256}
                fetchPriority="high"
                className="w-64 h-64 rounded-xl object-cover border-2 border-accent-border shadow-glow"
              />
            </div>
            <motion.p
              className="text-body-lg text-muted max-w-[560px] mx-auto md:mx-0 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {PERSONAL_INFO.valueProp}
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Contact Me
              </Button>
            </motion.div>
          </div>
          <div className="md:w-2/5 hidden md:flex justify-center">
            <img
              src={PERSONAL_INFO.headshot}
              alt={PERSONAL_INFO.name}
              width={320}
              height={320}
              fetchPriority="high"
              className="w-64 h-64 md:w-80 md:h-80 rounded-xl object-cover border-2 border-accent-border shadow-glow"
            />
          </div>
        </div>
      </section>

      <div className="page-container">
      {/* Career Highlights Section */}
      <section className="py-24">
        <SectionHeading title="Career Highlights" subtitle="Proven impact at scale." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAREER_HIGHLIGHTS.map((highlight, index) => (
            <MetricCard
              key={index}
              metric={highlight.metric}
              description={highlight.description}
              details={highlight.details}
              index={index}
              variant="default"
            />
          ))}
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="pb-24 scroll-mt-24">
        <SectionHeading title="Featured Work" subtitle="Diving deep into product challenges and delivering results." />
        <div className="flex flex-col gap-10">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] bg-surface rounded-xl overflow-hidden shadow-card border border-line hover:border-line-strong transition-colors duration-500 group"
            >
              <div className="p-8 lg:p-11 flex flex-col justify-center gap-4">
                <h3 className="text-h2">{study.title}</h3>
                <p className="eyebrow text-accent">{study.company}</p>
                <p className="text-body text-muted">{study.subtitle}</p>
                <div className="pt-2">
                  <Button to={`/case-study/${study.slug}`}>Read Case Study</Button>
                </div>
              </div>
              <div className="h-64 lg:h-auto lg:min-h-[260px] relative overflow-hidden">
                {study.heroVideo ? (
                  <LazyVideo
                    src={study.heroVideo}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  // heroImage stays a JPG for social previews; a WebP copy sits beside it.
                  <picture>
                    <source srcSet={study.heroImage.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    <img
                      src={study.heroImage}
                      alt={study.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </picture>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="pb-24">
        <motion.div
          className="bg-accent-soft border border-accent-border rounded-xl p-10 md:p-14 text-center max-w-[800px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Let's Talk</h2>
          <p className="text-body-lg text-muted mb-8 max-w-[480px] mx-auto">
            Interested in product strategy, a career conversation, or working together? Start with a free 15-minute intro call.
          </p>
          <Button
            href="https://calendly.com/tyvick/15min?month=2026-05"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            Book a Free Intro Call
          </Button>
        </motion.div>
      </section>
      </div>
    </>
  );
};

export default HomePage;
