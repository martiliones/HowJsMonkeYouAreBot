const { InlineMenu, i18n, siq, link } = require('@libtelegram/helpers');

const switchLanguage = async (usr, cb) => {
  // get current language
  const lang = usr.locale();

  // set locale
  usr.locale(
    lang === 'ru'?'en':'ru'
  );

  // rerender menu
  usr.reenter(cb);

  await cb.answer(usr.__('language.success'));
};

const menu = InlineMenu({
  Id: 'menu',
  Text: 'menu.text',
  wrapper: [i18n],
}, [
  [['menu.button', siq()]],
  [['menu.link', link('https://github.com/martiliones/HowJsMonkeYouAreBot')]],
  [['menu.switch_language', switchLanguage]]
]);

module.exports = menu;
