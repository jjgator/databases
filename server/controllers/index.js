var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, messages) {
        res.end(JSON.stringify(messages));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('request: ', req.body);
      models.messages.post(req.body, function(err, results) {
        console.log('Posted to database.');
        //fill in later
      });
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { res.end();},
    post: function (req, res) { res.end();}
  }
};
