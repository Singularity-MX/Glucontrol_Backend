const { Pool } = require('pg');


const connection = new Pool({
  user: 'root',
  host: 'dpg-ckl0b1rj89us73bkl0kg-a.oregon-postgres.render.com',
  database: 'glucontroldb',
  password: 'LMHKruifzLnDDCvEFpnLRDuJL3b16nuW',
  port: 5432,
  ssl: true, // Habilita la conexión SSL
});


connection.connect((error, client, done) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

module.exports = connection;


/**
local conection

const connection = new Pool({
  user: 'postgres',
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  database: 'glucontroldb',
  password: 'root',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});


SERVER RENDEER CONECTION

const connection = new Pool({
  user: 'root',
  host: 'dpg-ckl0b1rj89us73bkl0kg-a.oregon-postgres.render.com',
  database: 'glucontroldb',
  password: 'LMHKruifzLnDDCvEFpnLRDuJL3b16nuW',
  port: 5432,
  ssl: true, // Habilita la conexión SSL
});


 */



