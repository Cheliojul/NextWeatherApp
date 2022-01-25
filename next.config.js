/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate')
const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ua', 'ru'],
    defaultLocale: 'en-US',
  },
};

module.exports = nextConfig;
