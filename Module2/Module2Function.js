const connection = require('../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');




function Login(req, res, data) {
    const { Email, Password } = data;

    // Realizar una consulta para buscar un usuario con el email y contraseña proporcionados
    connection.query('SELECT * FROM Users WHERE Email = ? AND Password = ?', [Email, Password], (error, results) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.length > 0) {

          const usuarioUID = results[0].UID; // Tomar el UID del primer resultado

          // Enviar solo el UID como respuesta JSON
          res.status(200).json({
            UID: usuarioUID
          });
          
        } else {
          // No se encontró un usuario con las credenciales proporcionadas
          res.sendStatus(401); // Código 401 para indicar no autorizado
        }
      }
    });
  }


  module.exports = {
    Login
  }