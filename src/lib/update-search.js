require('dotenv').config({
  path: '.env',
});

module.exports.shouldUpdateSearch = () => process.env.NETLIFY === true && process.env.CONTEXT === 'production';
