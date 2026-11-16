import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { titan: { navy: '#071d3b', blue: '#0c3c78', silver: '#aeb8c4', ink: '#111827', mist: '#f3f6fa' } }, boxShadow: { soft: '0 18px 55px rgba(7,29,59,.10)' } } },
  plugins: [],
}
export default config
