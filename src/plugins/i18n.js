const I18n = require('@libtelegram/i18n');
const path = require('path');

module.exports = new I18n({
  defaultLanguage: 'en',
  directory: path.resolve(__dirname, '../locales'),
  hotLoadLocales: process.env.NODE_ENV === 'development'
});

