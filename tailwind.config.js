
const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
		colors: {
			primary: '#EE9789'
		}
	},
	fontFamily: {
		sans: ['Montserrat', 'sans-serif'],
	}
  },
  plugins: [],

});