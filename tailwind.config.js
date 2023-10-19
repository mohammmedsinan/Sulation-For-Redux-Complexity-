import Config from './src/utilities/config';
const { primaryColor,accentColor,secondaryColor} = Config.Site_Theme;

module.exports = {
  content: ['./dist/*.{html,js,jsx}', './src/**/*.{html,js,jsx}',],
  corePlugins: {
    preflight: false,
  },
    theme: {
      extend: {},
      colors: {
        primary:`rgb(${primaryColor})`,
        secondary:`rgb(${secondaryColor})`,
        special:`rgb(${accentColor})`,
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  