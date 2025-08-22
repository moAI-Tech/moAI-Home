/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html", "./dist/**/*.js", "./*.html"],
  plugins: [],
  safelist: [
    'text-brand-50','text-brand-100','text-brand-200','text-brand-300','text-brand-400',
    'text-brand-500','text-brand-600','text-brand-700','text-brand-800','text-brand-900',
    'bg-brand-700','hover:bg-brand-800','border-brand-700',
    'from-brand-50','to-brand-50','from-brand-700','to-brand-700',
    'scale-y-0','scale-y-100','translate-y-0','opacity-100'
  ],
}
