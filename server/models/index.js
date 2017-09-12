var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      queryString = 'SELECT * FROM messages';
      db.query(queryString, callback);
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
