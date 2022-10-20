/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1023px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }
		},
    container: {
      padding: '20px',
      center: true,
    },
     colors: {
      'white': '#ffffff',
      'black': '#000000',
      'logo-font-color': '#394149',
      'nav-font-color': '#4D4244',
      'attention-font-color': '#D70026',
      'footer-logo-font-color': '#D7E0EA',
      'email-font-color': '#D7E0EA',
      'optional-bg-color': '#E5E5E5',
      'button-bg-color': '#FF0D38',
      'footer-bg-color': '#272727',
      'email-bg-color': '#595959', 
    },
    extend: {
      boxShadow: {
        'custom-shadow': '0px 0px 30px rgba(255, 13, 56, 0.21)',
      }
    },
  },
  plugins: [],
}
