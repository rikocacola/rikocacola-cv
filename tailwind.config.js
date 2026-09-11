/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2f455c',
          50: '#e6eaef',
          100: '#bcc6d3',
          200: '#94a3b8',
          300: '#6e809a',
          400: '#4d6481',
          500: '#2f455c',
          600: '#293d52',
          700: '#223344',
          800: '#1a2837',
          900: '#111c29',
          deep: '#26384c',
          deeper: '#1e2d3e',
        },
        mint: {
          DEFAULT: '#34f5c5',
          dim: '#2bd9ad',
        },
        sky: {
          DEFAULT: '#1dcdfe',
          dim: '#0fb8e8',
        },
        leaf: {
          DEFAULT: '#21d0b2',
          dim: '#1ab89d',
        },
        ink: {
          DEFAULT: '#e2e8f0',
          dim: '#cbd5e1',
          mute: '#94a3b8',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'sidebar-glow':
          '1px 0 0 rgba(29,205,254,0.18), 4px 0 24px -8px rgba(29,205,254,0.18), 8px 0 48px -16px rgba(52,245,197,0.12)',
        'card-hover':
          '0 0 0 1px rgba(29,205,254,0.35), 0 12px 40px -12px rgba(29,205,254,0.25), 0 0 60px -20px rgba(52,245,197,0.18)',
        'chip-hover':
          '0 0 0 1px rgba(33,208,178,0.4), 0 4px 16px -4px rgba(33,208,178,0.35)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(rgba(226,232,240,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.04) 1px, transparent 1px)',
        'radial-spot':
          'radial-gradient(ellipse at top, rgba(52,245,197,0.10), transparent 60%), radial-gradient(ellipse at bottom right, rgba(29,205,254,0.10), transparent 60%)',
      },
      backgroundSize: {
        grid: '32px 32px',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        sweep: 'sweep 8s linear infinite',
      },
    },
  },
  plugins: [],
};