const { Pool } = require('pg');

//------------------------------------> Variables de entorno
const HOST_DB = process.env.HOSTDB || 'apps-posgrado-database.postgres.database.azure.com';
const USR_NAME = process.env.USERDB || 'rs17';
const PWD_DB = process.env.PASSWORD || 'Javier117';
const DB_NAME = process.env.DATABASE || 'glucontroldb';
const PORT_DB = process.env.PORT || 5432;

const connection = new Pool({
  user: 'postgres',
  host: 'localhost', // o la dirección de tu servidor PostgreSQL
  database: 'glucontroldb',
  password: 'root',
  port: 5432, // El puerto predeterminado de PostgreSQL es 5432
});


connection.connect((error, client, done) => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
  } else {
    //console.log('Conexión exitosa a la base de datos\n');
   // //console.log('------------------🚀🖥️ BIENVENIDO AL BACKEND DE GLUCONTROL 🖥️🚀 --------------------\n');
    typeWelcomeMessage();
  }
});

const welcomeMessage = '------------------------ 🚀🖥️ BIENVENIDO AL BACKEND DE GLUCONTROL  🖥️🚀 ------------------------';
const loadingChars = '▉▊▋▌▍▎▏';
const delay = 50;

function typeWelcomeMessage() {
  console.log('Corriendo Backend de Glucontrol...');
}



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



