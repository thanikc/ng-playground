/**
 * proxy.config.js
 */
require('dotenv').config();

const IDP_URL = process.env.IDP_URL;

module.exports = {
  '/oauth2/token': {
    target: IDP_URL,
    secure: false,
    changeOrigin: true,
  },
};
