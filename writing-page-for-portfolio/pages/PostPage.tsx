import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { WRITING_POSTS } from '../constants';
import { ContentBlock } from '../types';
import ArrowLeftIcon from '../components/icons/ArrowLeftIcon';
import SEO, { getPersonSchema } from '../components/SEO';

const formatDate = (iso: string) => {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Renders a single content block. 'p' blocks may contain limited inline HTML
// (<strong>, <em>) stored as trusted content from our own constants.ts.
const Block: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="text-2xl font-bold text-white mt-10 mb-4 tracking-tight">
          {block.content}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="text-xl font-semibold text-white mt-8 mb-3">
          {block.content}
        </h3>
      );
    case 'p':
      return (
        <p
          className="text-slate-300 leading-relaxed mb-5 text-[1.0625rem]"
          dangerouslySetInnerHTML={{ __html: block.content }}
        />
      );
    case 'p-bold-lead':
      return (
        <p className="text-white font-semibold leading-relaxed mb-5 text-lg border-l-2 border-amber-500 pl-5 py-1">
          {block.content}
        </p>
      );
    case 'hr':
      return <hr className="border-slate-700/60 my-8" />;
    case 'em':
      return (
        <p className="text-slate-500 text-sm italic mt-8">
          {block.content}
        </p>
      );
    default:
      return null;
  }
};

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = WRITING_POSTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl text-white">Post Not Found</h1>
        <p className="text-slate-400 mt-4">This essay doesn't exist or may have moved.</p>
        <Link
          to="/writing"
          className="mt-8 inline-block bg-amber-500 text-black text-sm font-medium py-3 px-6 rounded-lg hover:bg-orange-500 tracking-wider"
        >
          Back to Writing
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} — Tyler Vickers`}
        description={post.excerpt}
        url={`https://tyvick.com/writing/${post.slug}`}
        type="article"
        keywords={post.tags}
        structuredData={[
          getPersonSchema(),
          {
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            url: `https://tyvick.com/writing/${post.slug}`,
            datePublished: post.publishedAt,
            author: { '@id': 'https://tyvick.com/#person' },
            keywords: post.tags.join(', '),
          },
        ]}
      />

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back link */}
          <Link
            to="/writing"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm mb-10 transition-colors duration-200"
          >
            <ArrowLeftIcon />
            All writing
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
              <span>{formatDate(post.publishedAt)}</span>
              <span>·</span>
              <span>{post.readMinutes} min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight tracking-tight">
              {post.title}
            </h1>
            <p className="text-slate-400 text-lg italic mb-5">{post.subtitle}</p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <hr className="border-slate-700/60 mb-8" />

          {/* Body */}
          <article>
            {post.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </article>

          {/* Footer nav */}
          <div className="mt-14 pt-8 border-t border-slate-800">
            <Link
              to="/writing"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200"
            >
              <ArrowLeftIcon />
              Back to all writing
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default PostPage;
