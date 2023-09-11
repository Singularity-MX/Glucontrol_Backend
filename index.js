const express = require('express');
const app = express();
const port = 3000;

const { 
  InsertarUsuarios 
} = require('./Module1/Login/functionsLogin');

//-------------------------------------END POINTS----------------------------
//------------------------------------------------------------- Ruta de insertar usuarios info personal
app.post('/Module1/Login/Insert', async (req, res) => {
  //Método para registrar al usuario
  const formData = req.body;
  InsertarUsuarios(formData);
});



// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
