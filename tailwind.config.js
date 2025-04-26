/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Terminal theme colors
        'terminal': {
          'bg': 'var(--terminal-bg)',
          'text': 'var(--terminal-text)',
          'border': 'var(--terminal-border)',
          'header': 'var(--terminal-header)',
          'header-text': 'var(--terminal-header-text)',
        },
        'primary': {
          DEFAULT: 'var(--primary-color)',
          'light': 'var(--primary-light)',
          'dark': 'var(--primary-dark)',
        },
        'secondary': 'var(--secondary-color)',
        'accent': {
          DEFAULT: 'var(--accent-color)',
          'light': 'var(--accent-light)',
          'dark': 'var(--accent-dark)',
        },
        'code': {
          'bg': 'var(--code-bg)',
          'text': 'var(--code-text)',
          'comment': 'var(--code-comment)',
          'keyword': 'var(--code-keyword)',
          'string': 'var(--code-string)',
          'number': 'var(--code-number)',
          'function': 'var(--code-function)',
          'operator': 'var(--code-operator)',
          'property': 'var(--code-property)',
          'variable': 'var(--code-variable)',
          'method': 'var(--code-method)',
          'class': 'var(--code-class)',
          'line-number': 'var(--code-line-number)',
          'current-line': 'var(--code-current-line)',
          'current-line-border': 'var(--code-current-line-border)',
        },
        'success': 'var(--success-color)',
        'warning': 'var(--warning-color)',
        'error': 'var(--error-color)',
      },
      backgroundColor: {
        'primary': 'var(--bg-primary)',
        'secondary': 'var(--bg-secondary)',
        'tertiary': 'var(--bg-tertiary)',
      },
      textColor: {
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
        'tertiary': 'var(--text-tertiary)',
        'dark': 'var(--text-dark)',
        'light': 'var(--text-light)',
        'muted': 'var(--text-muted)',
      },
      borderColor: {
        'primary': 'var(--border-color)',
        'terminal': 'var(--terminal-border)',
        'table': 'var(--table-border)',
        DEFAULT: 'transparent',
      },
      boxShadow: {
        'card': 'var(--card-depth-shadow)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 