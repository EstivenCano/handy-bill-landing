module.exports = {
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',
};
