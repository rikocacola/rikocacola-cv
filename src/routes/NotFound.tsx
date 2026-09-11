import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="grid min-h-dvh place-items-center bg-navy px-6 text-ink">
      <div className="max-w-md text-center">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-deeper ring-1 ring-mint/30">
          <Terminal size={18} className="text-mint" />
        </div>
        <p className="mt-6 font-mono text-sm tracking-[0.18em] text-sky/80">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink">
          <span className="text-mint">Page not found</span>
        </h1>
        <p className="mt-3 text-ink-dim">
          The route you were looking for has either moved or never existed.
        </p>
        <button
          onClick={() => navigate('/')}
          className="focus-ring mt-8 inline-flex items-center gap-2 rounded-md bg-leaf px-4 py-2 text-sm font-semibold text-navy-deeper transition hover:bg-leaf-dim"
        >
          <ArrowLeft size={14} />
          Back to home
        </button>
      </div>
    </main>
  );
}