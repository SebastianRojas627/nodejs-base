let mysql = require('mysql')

//TODO change config file to environment variable

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Alpha 627',
    database: 'pokedex'
})

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });