const { 
  Insertar 
} = require('../../SQL_CRUD_Functions/CRUD');


function InsertarUsuarios(data) {
  Insertar('Tabla', data);
}

 function InsertarUsuarios(data) {Insertar('Tabla', data);}
  
  

  module.exports = {
    InsertarUsuarios
  }