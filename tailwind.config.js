/** @type {import('tailwindcss').Config} */
module.exports = {
  // seja amplo aqui para não perder nada
  content: ["./dist/**/*.html", "./dist/**/*.js", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','Segoe UI','Roboto','Arial','Noto Sans','sans-serif'],
      },
      colors: {
        brand: {
          50:'#e6eef4',100:'#c3d6e6',200:'#a0bed8',300:'#7da6ca',
          400:'#5a8ebc',500:'#3776ae',600:'#21609a',700:'#084375',
          800:'#06345a',900:'#04253f'
        }
      },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.08)' },
      borderRadius: { '2xl':'1.25rem', xl2:'1rem' },
    },
  },
  plugins: [],
  // (opcional) garanta as classes mesmo se não forem detectadas:
  safelist: [
    // textos
    'text-brand-50','text-brand-100','text-brand-200','text-brand-300','text-brand-400',
    'text-brand-500','text-brand-600','text-brand-700','text-brand-800','text-brand-900',
    // fundos/bordas/hover que você já usou no HTML
    'bg-brand-700','hover:bg-brand-800','border-brand-700',
    // gradientes se usar `from-/to-`
    'from-brand-50','to-brand-50','from-brand-700','to-brand-700'
  ]
}
