const API = require('./api');

module.exports = function(usr, msg, next) {
  Object.assign(usr, API);

  next();
};
