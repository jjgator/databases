var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      queryString = 'SELECT * FROM messages';
      db.query(queryString, callback);
    }, // a function which produces all the messages
    post: function (data, callback) {
      var test = "'" + data.message + "'" + ", '" + data.username + "','" + data.roomname + "')";
      console.log(test);
      queryString = "INSERT INTO messages (message, username, roomname) VALUES (" + test;      //db.query()
      db.query(queryString, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
