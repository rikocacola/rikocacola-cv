import { useMemo } from 'react';
import { ArrowUpRight, Calendar, Clock, PenLine } from 'lucide-react';
import { posts } from '~/data/portfolio';
import type { BlogPost } from '~/types';
import { SectionHeader } from '~/components/SectionHeader';
import { Chip } from '~/components/Chip';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <a
      href={post.href}
      className="focus-ring group relative flex flex-col rounded-xl border border-white/5 bg-navy-deep/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/40 hover:bg-navy-deep/70 hover:shadow-chip-hover"
    >
      <header className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        <span className="inline-flex items-center gap-1.5">
          <span className="text-sky/70">{String(index + 1).padStart(2, '0')}</span>
          <span aria-hidden className="h-px w-3 bg-white/10" />
          <Chip tone="mint" className="!px-2 !py-0.5 !text-[9px]">
            {post.tag}
          </Chip>
        </span>
        <ArrowUpRight
          size={14}
          className="text-ink-mute transition-all duration-300 group-hover:text-mint group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </header>

      <h3 className="text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-mint">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>

      <footer className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={12} />
          {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock size={12} />
          {post.readingTime}
        </span>
      </footer>
    </a>
  );
}

function EmptyBlog() {
  return (
    <div className="grid place-items-center rounded-2xl border border-dashed border-white/10 bg-navy-deep/30 p-10 text-center sm:p-14">
      <span
        aria-hidden
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy ring-1 ring-sky/20"
      >
        <PenLine size={18} className="text-sky" />
      </span>
      <h3 className="text-lg font-semibold text-ink">Nothing to read here — yet.</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-dim">
        I write when I have something specific to say. A couple of drafts in flight,
        but nothing polished enough to put on the shelf.
      </p>
      <a
        href="mailto:riko.devmail@gmail.com?subject=Writing%20subscription"
        className="focus-ring mt-5 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-mono text-xs text-sky transition hover:bg-sky/10"
      >
        Get a quiet email when something ships →
      </a>
    </div>
  );
}

export function BlogSection() {
  const visiblePosts = useMemo(() => posts, []);

  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="scroll-mt-24 border-t border-white/5 py-20"
    >
      <SectionHeader index="05" label="Blog" hint="notes on craft" />

      {visiblePosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {visiblePosts.map((post, idx) => (
              <PostCard key={post.id} post={post} index={idx} />
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 font-mono text-xs text-ink-mute">
            <span className="text-sky">→</span>
            <span>more on </span>
            <a
              href="#"
              className="focus-ring rounded text-mint link-underline transition"
            >
              /writing
            </a>
          </div>
        </>
      ) : (
        <EmptyBlog />
      )}
    </section>
  );
}