const connection = require('../../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');


function generarTokenID(){
  return uuidv4();
}

function InsertarUsuarios(res, req, data) {

  //Generar token
  const token = generarTokenID();

  //Crear json nuevos
  const dataPersonal = {
    ID_user: token,
    Nombre: data.Nombre,
    ApellidoPaterno: data.AP,
    ApellidoMaterno: data.AM,
    Edad: data.Edad
  }
  const dataUsuarios= {
    ID_user: token,
    Email: data.Email,
    Password: data.Pass
  }
  //Enviar datos
  //-------> Tabla información personal
  connection.query('INSERT INTO informacionpersonal SET ?', dataPersonal, (error, results) => {
    if (error) {
      console.error('Error al realizar el INSERT:', error);
      res.status(500).json({ error: 'Ocurrió un error al agregar el usuario' });
    } else {
      res.status(201).json({ message: 'Usuario agregado' });
    }
  });
  //-------> Tabla usuarios
  connection.query('INSERT INTO usuarios SET ?', dataUsuarios, (error, results) => {
    if (error) {
      console.error('Error al realizar el INSERT:', error);
      res.status(500).json({ error: 'Ocurrió un error al agregar el usuario' });
    } else {
      res.status(201).json({ message: 'Usuario agregado' });
    }
  });
}

 

  module.exports = {
    InsertarUsuarios
  }