const connection = require('../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');


function generarTokenID(){
  return uuidv4();
}

function InsertarUsuarios(req, res, data) {

  //Generar token
  const token = generarTokenID();

  //Crear json nuevos
  const dataPersonal = {
    UID: token,
    Nombre: data.Nombre,
    ApellidoPaterno: data.AP,
    ApellidoMaterno: data.AM,
    Edad: data.Edad
  }
  const dataUsuarios= {
    UID: token,
    Email: data.Email,
    Password: data.Pass
  }
console.log(token);
/*  console.log("Personal datos: ");
  console.log(dataPersonal);
  console.log("Personal datos: ");
  console.log(dataUsuarios);

*/
  //Enviar datos
//-------> Tabla información personal
connection.query('INSERT INTO Personal_information SET ?', dataPersonal, (error, results) => {
  if (error) {
    console.error('Error al realizar el INSERT:', error);
    res.sendStatus(500);
  } else {
    //console.log('Usuario agregado a Personal_information');
    // Después de la primera consulta, realiza la segunda consulta
    connection.query('INSERT INTO Users SET ?', dataUsuarios, (error, results) => {
      if (error) {
        console.error('Error al realizar el INSERT en Users:', error);
        res.sendStatus(500);
      } else {
        console.log('Usuario agregado a Users');
        // Después de ambas consultas exitosas, envía la respuesta
        res.sendStatus(201);
      }
    });
  }
});
}


  module.exports = {
    InsertarUsuarios
  }