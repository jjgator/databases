var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('can you see me');
      models.messages.get(function(err, messages) {
        console.log(messages);
        res.end(JSON.stringify(messages));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};
