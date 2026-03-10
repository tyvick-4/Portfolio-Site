import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WRITING_POSTS } from '../constants';
import SEO, { getPersonSchema } from '../components/SEO';

const formatDate = (iso: string) => {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const WritingPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Writing — Tyler Vickers"
        description="Product strategy essays on growth, community platforms, and the AI-era web by Tyler Vickers, Senior Product Manager."
        url="https://tyvick.com/writing"
        keywords={['Product Strategy', 'PM Writing', 'AI Search', 'Community Platforms', 'Tyler Vickers']}
        structuredData={[getPersonSchema()]}
      />
      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Writing
          </h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Product strategy essays on growth, community platforms, and the AI-era web.
          </p>

          <div className="flex flex-col gap-8">
            {WRITING_POSTS.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group border border-slate-800 rounded-2xl p-7 hover:border-amber-500/40 hover:bg-slate-800/30 transition-all duration-300"
              >
                <Link to={`/writing/${post.slug}`} className="block">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span>·</span>
                    <span>{post.readMinutes} min read</span>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm italic mb-3">{post.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed mb-5">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-amber-400 text-sm font-medium group-hover:underline">
                    Read essay →
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default WritingPage;
