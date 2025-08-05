require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.HOSTDB || 'localhost',
  user: process.env.USERDB || 'root',
  password: process.env.PASSWORD || 'Javier117',
  database: process.env.DATABASE || 'glucontrol_db',
  port: process.env.PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión exitosa a MySQL');
    connection.release();
    typeWelcomeMessage();
  } catch (err) {
    console.error('❌ Error al conectar a MySQL:', err);
  }
}

testConnection();

function typeWelcomeMessage() {
  console.log('Corriendo Backend de Glucontrol...');
}

module.exports = pool;
