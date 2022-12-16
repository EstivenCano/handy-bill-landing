const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n,
};
