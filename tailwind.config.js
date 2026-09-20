/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050807',
        coal: '#0b100e',
        graphite: '#111917',
        smoke: '#16201d',
        line: 'rgba(228, 240, 236, 0.08)',
        lineSoft: 'rgba(228, 240, 236, 0.05)',
        mint: '#34d399',
        aqua: '#22d3ee',
        mist: '#94a19c',
        snow: '#f0f5f3',
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Cairo', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(52, 211, 153, 0.15), 0 8px 40px -12px rgba(52, 211, 153, 0.18)',
        panel: '0 20px 60px -20px rgba(0, 0, 0, 0.8)',
        mint: '0 0 24px -4px rgba(52, 211, 153, 0.35)',
      },
      maxWidth: {
        content: '1180px',
      },
      animation: {
        blink: 'blink 1.1s steps(1) infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}