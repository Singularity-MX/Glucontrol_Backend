const connection = require('../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');


function EditUserInformation(req, res, UID, data) {
    // Crear JSON para Personal_information
    const dataPersonal = {
      Nombre: data.Nombre,
      ApellidoPaterno: data.AP,
      ApellidoMaterno: data.AM,
      Edad: data.Edad
    };
  
    // Crear JSON para Users
    const dataUsuarios = {
      Email: data.Email,
      Password: data.Pass
    };
  
    // Realizar consulta para actualizar Personal_information
    connection.query('UPDATE Personal_information SET ? WHERE UID = ?', [dataPersonal, UID], (error1, results1) => {
      if (error1) {
        console.error('Error al actualizar Personal_information:', error1);
        res.sendStatus(500); // Error del servidor
      } else {
        // Verificar si Personal_information se actualizó correctamente
        if (results1.affectedRows > 0) {
          // Realizar consulta para actualizar Users
          connection.query('UPDATE Users SET ? WHERE UID = ?', [dataUsuarios, UID], (error2, results2) => {
            if (error2) {
              console.error('Error al actualizar Users:', error2);
              res.sendStatus(500); // Error del servidor
            } else {
              // Verificar si Users se actualizó correctamente
              if (results2.affectedRows > 0) {
                // Ambas tablas se actualizaron correctamente
                res.sendStatus(200); // Código 200 para indicar éxito
              } else {
                // No se encontró un usuario con el UID proporcionado en Users
                res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
              }
            }
          });
        } else {
          // No se encontró un usuario con el UID proporcionado en Personal_information
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }
  
  function GetUserInformation(req, res, UID) {
    // Realizar una consulta para obtener la información del usuario por UID desde ambas tablas
    const query = `
      SELECT U.*, P.Nombre, P.ApellidoPaterno, P.ApellidoMaterno, P.Edad
      FROM Users U
      INNER JOIN Personal_information P ON U.UID = P.UID
      WHERE U.UID = ?
    `;
  
    connection.query(query, [UID], (error, results) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.length > 0) {
          // Usuario encontrado, enviar información como respuesta JSON
          const usuario = results[0]; // Tomar el primer resultado
          res.status(200).json(usuario);
        } else {
          // No se encontró un usuario con el UID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }


  function DeleteUserAccount(req, res, UID) {
    // Realizar una consulta para eliminar la cuenta del usuario por UID en ambas tablas
    const query = `
      DELETE U.*, P.*
      FROM Users U
      INNER JOIN Personal_information P ON U.UID = P.UID
      WHERE U.UID = ?
    `;
  
    connection.query(query, [UID], (error, results) => {
      if (error) {
        console.error('Error al eliminar la cuenta del usuario:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // La cuenta del usuario se eliminó correctamente
          res.sendStatus(200); // Código 200 para indicar éxito
        } else {
          // No se encontró un usuario con el UID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }


module.exports = {
    EditUserInformation, GetUserInformation, DeleteUserAccount
}