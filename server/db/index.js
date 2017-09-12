var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

exports.connect = function () {
  dbConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

exports.query = function (queryString) {
  return dbConnection.query(queryString, function(err, results) {
    if (err) throw err;
    return results;
  });
}

db = module.exports;
