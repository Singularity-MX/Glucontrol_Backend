function Insert(tabla, data) {
    var tabla=this.tabla;
    connection.query('INSERT INTO '+tabla+' SET ?', data, (error, results) => {
      if (error) {
        console.error('Error al realizar el INSERT:', error);
        res.status(500).json({ error: 'Ocurrió un error al agregar el usuario' });
      } else {
        res.status(200).json({ message: 'Agregado exitosamente' });
      }
    });
  }


  module.exports = {
    Insert
  }