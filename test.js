var request = require('request'); // You might need to npm install the request module!

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var message = {
  username: 'Valjean',
  message: 'In mercy\'s name, three days is all I need.',
  roomname: 'lobby' };

request({
  method: 'POST',
  uri: 'http://localhost:3000/classes/messages',
  json: message
})
