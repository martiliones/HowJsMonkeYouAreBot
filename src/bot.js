const LibTelegram = require('libtelegram');

require('dotenv').config();

const bot = new LibTelegram(process.env.TOKEN);

const antiFlood = require('./plugins/antiFlood.js');
const i18n = require('./plugins/i18n');
const api = require('./api');

bot.use(antiFlood);
bot.use(i18n.init());
bot.use(api);

const menu = require('./menu');

bot.use('/', menu);

const { getResultFor } = require('./utils/index');

bot.inline((usr, msg) => {
  const name = msg.query;
  
  let title = usr.__('result.default_title');

  if (name) {
    if (name.length > 50) {
      return msg.answer();
    }

    title = usr.__('result.custom_title', { name });
  }

  const description = usr.__('result.description');
  const thumb_url = usr.__('result.image');

  const result = getResultFor(name, usr);

  const results = [
    {
      title,
      description,
      thumb_url,
      type: 'article',
      id: 'result',
      input_message_content: {
        message_text: result,
      }
    }
  ];

  msg.answer(results, {
    is_personal: true
  });
});

bot.command('start', async (usr, msg) => {
  return usr.scene('/');
});

module.exports = bot;
