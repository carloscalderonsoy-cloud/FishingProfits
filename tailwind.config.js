/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
      './app/**/*.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    prefix: "",
    theme: {
        container: {
                center: true,
                padding: '2rem',
                screens: { '2xl': '1400px' }
        },
        extend: {
                colors: {
                        black:   '#0D0D0D',
                        'base-2':'#050505',
                        dark:    '#141414',
                        surface: '#1C1C1C',
                        green:   '#4CAF23',
                        'green-2':'#5CC02A',
                        red:     '#D42B2B',
                        amber:   '#F59E0B',
                        'tg-blue':'#2AABEE',
                        silver:  '#C8C8C8',
                        gray:    '#777777',
                        'gray-2':'#4A4A4A',
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
                        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
                        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
                        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
                        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
                        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
                        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
                },
                fontFamily: {
                        display: ['var(--font-display)', "'Barlow Condensed'", 'sans-serif'],
                        body:    ['var(--font-body)',    "'DM Sans'",         'sans-serif'],
                        mono:    ['var(--font-mono)',    "'JetBrains Mono'",  'monospace'],
                        sans:    ['var(--font-body)',    "'DM Sans'",         'sans-serif'],
                },
                borderRadius: {
                        lg: 'var(--radius)',
                        md: 'calc(var(--radius) - 2px)',
                        sm: 'calc(var(--radius) - 4px)',
                },
                spacing: {
                        18: '4.5rem',
                },
                keyframes: {
                        'accordion-down': {
                                from: { height: '0' },
                                to:   { height: 'var(--radix-accordion-content-height)' },
                        },
                        'accordion-up': {
                                from: { height: 'var(--radix-accordion-content-height)' },
                                to:   { height: '0' },
                        },
                        'ticker-scroll': {
                                '0%':   { transform: 'translateX(0%)' },
                                '100%': { transform: 'translateX(-50%)' },
                        },
                        'pulse-dot': {
                                '0%, 100%': { opacity: '1',    transform: 'scale(1)'   },
                                '50%':      { opacity: '0.35', transform: 'scale(0.8)' },
                        },
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up':   'accordion-up 0.2s ease-out',
                        'ticker':         'ticker-scroll 45s linear infinite',
                        'pulse-dot':      'pulse-dot 1.4s ease-in-out infinite',
                },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
