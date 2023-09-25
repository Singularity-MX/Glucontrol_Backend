const mysql = require('mysql');

//windows conection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glucontroldb'
});

connection.connect((error) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = connection;

/*
  host: '127.0.0.1',
    user: 'root',
    password: 'Javier1234567890$',
    database: 'ejemplo'
    */



   /* Linux
   
   
   const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Javier1234567890$',
    database: 'glucontroldb'
});

*/