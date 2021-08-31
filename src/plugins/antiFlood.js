const antiFlood = require('@libtelegram/anti-flood');

module.exports = antiFlood.omission({
  delay: 1 / 3
});
