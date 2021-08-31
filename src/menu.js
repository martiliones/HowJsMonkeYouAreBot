const { InlineMenu, i18n, siq, link } = require('@libtelegram/helpers');

const menu = InlineMenu({
  Id: 'menu',
  Text: 'menu.text',
  wrapper: [i18n],
}, [
  [['menu.button', siq()]],
  [['menu.link', link('https://github.com/martiliones/HowJsMonkeYouAreBot')]]
]);

module.exports = menu;
