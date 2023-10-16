const connection = require('../SQL_CONECTION');
const { v4: uuidv4 } = require('uuid');


function generarFID(){
    return uuidv4();
  }

  function generarAID(){
    return uuidv4();
  }

/////////////////////create
async function CreateFood(req, res, foodData) {
  try {
    // Generar un ID único para el nuevo alimento (FID)
    const FID = generarFID(); // Supongo que tienes una función para generar FID

    // Crear un objeto que representa el nuevo alimento
    const newFood = {
      FID: FID,
      UID: foodData.UID,
      Food_name: foodData.Food_name,
      Classification: foodData.Classification
    };

    // Realizar la inserción en la tabla "Foods"
    const insertQuery = `
      INSERT INTO "foods"("FID", "UID", "Food_name", "Classification")
      VALUES ($1, $2, $3, $4)
    `;
    const values = [newFood.FID, newFood.UID, newFood.Food_name, newFood.Classification];

    await connection.query(insertQuery, values);

    // Si llegamos a este punto, la inserción fue exitosa
    res.status(200).json({ message: 'Alimento creado exitosamente' });
  } catch (error) {
    console.error('Error al crear el alimento:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
}





  function GetUserFoods(req, res, UID) {
    // Realizar una consulta para obtener la lista de alimentos por UID
    connection.query('SELECT * FROM Foods WHERE UID = ?', [UID], (error, results) => {
      if (error) {
        console.error('Error al obtener la lista de alimentos:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.length > 0) {
          // Alimentos encontrados, enviar la lista como respuesta JSON
          const foodsList = results;
          res.status(200).json(foodsList);
        } else {
          // No se encontraron alimentos para el UID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }

  function UpdateFoodInformation(req, res, FID, updatedFoodData) {
    // Realizar una consulta para actualizar la información del alimento por FID
    connection.query('UPDATE Foods SET ? WHERE FID = ?', [updatedFoodData, FID], (error, results) => {
      if (error) {
        console.error('Error al actualizar información del alimento:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // La información del alimento se actualizó correctamente
          res.sendStatus(200); // Código 200 para indicar éxito
        } else {
          // No se encontró un alimento con el FID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }


  function DeleteFood(req, res, FID) {
    // Realizar una consulta para eliminar un alimento por FID
    connection.query('DELETE FROM Foods WHERE FID = ?', [FID], (error, results) => {
      if (error) {
        console.error('Error al eliminar el alimento:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // El alimento se eliminó correctamente
          res.sendStatus(200); // Código 200 para indicar éxito
        } else {
          // No se encontró un alimento con el FID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }




  ////////////////////////////////////////////////////////////////////////////////////// actividad

  function CreateActivity(req, res, newActivityData) {
    const AID = generarAID();

    const newAct = {
      AID: AID,
      UID: newActivityData.UID,
      Activitie_name: newActivityData.Activitie_name,
      Classification: newActivityData.Classification
    };

    // Realizar una consulta para insertar una nueva actividad
    connection.query('INSERT INTO Activities SET ?', newAct, (error, results) => {
      if (error) {
        console.error('Error al crear la actividad:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        console.log('Actividad creada');
        res.sendStatus(201); // Código 201 para indicar que se creó con éxito
      }
    });
  }

  function GetActivitiesByUID(req, res, UID) {
    // Realizar una consulta para obtener las actividades de un usuario por su UID
    connection.query('SELECT * FROM Activities WHERE UID = ?', [UID], (error, results) => {
      if (error) {
        console.error('Error al obtener las actividades:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.length > 0) {
          // Actividades encontradas, enviar la lista de actividades como respuesta JSON
          const activitiesList = results.map((activity) => ({
            AID: activity.AID,
            Activitie_name: activity.Activitie_name,
            Classification: activity.Classification
          }));
          res.status(200).json(activitiesList);
        } else {
          // No se encontraron actividades para el UID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }

  function UpdateActivity(req, res, AID, updatedActivityData) {
    // Realizar una consulta para actualizar los datos de una actividad por su AID
    connection.query('UPDATE Activities SET ? WHERE AID = ?', [updatedActivityData, AID], (error, results) => {
      if (error) {
        console.error('Error al actualizar la actividad:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // Los datos de la actividad se actualizaron correctamente
          res.sendStatus(200); // Código 200 para indicar éxito
        } else {
          // No se encontró la actividad con el AID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }

  function DeleteActivity(req, res, AID) {
    // Realizar una consulta para eliminar una actividad por su AID
    connection.query('DELETE FROM Activities WHERE AID = ?', [AID], (error, results) => {
      if (error) {
        console.error('Error al eliminar la actividad:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // La actividad se eliminó correctamente
          res.sendStatus(200); // Código 200 para indicar éxito
        } else {
          // No se encontró la actividad con el AID proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////////glucosa
  function assignCategory(glucoseLevel, valueCategories) {
    for (const category of valueCategories) {
      if (glucoseLevel >= category.Minimum_Value && glucoseLevel <= category.Maximum_Value) {
        return category.Category_Name;
      }
    }
    // Si no se encuentra ninguna categoría correspondiente, puedes asignar una categoría por defecto o manejarla de acuerdo a tus necesidades.
    return 'Sin categoría';
  }

  
  function CreateGlucoseReading(req, res, newGlucoseReading) {
    // Realizar una consulta para obtener las categorías y sus rangos de valores mínimos y máximos
    connection.query('SELECT * FROM Value_Categories', (error, valueCategories) => {
      if (error) {
        console.error('Error al consultar las categorías de valores:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        // Asignar la categoría según el nivel de glucosa
        const category = assignCategory(newGlucoseReading.Glucose_level, valueCategories);
        newGlucoseReading.Category = category;
  
        // Insertar la lectura de glucosa en la tabla "Glucose_readings" con la categoría asignada
        connection.query('INSERT INTO Glucose_readings SET ?', newGlucoseReading, (error, results) => {
          if (error) {
            console.error('Error al crear la lectura de glucosa:', error);
            res.sendStatus(500); // Error del servidor
          } else {
            console.log('Lectura de glucosa creada');
            res.sendStatus(201); // Código 201 para indicar que se creó con éxito
          }
        });
      }
    });
  }
  

  function GetGlucoseReadings(req, res, UID) {
    // Realizar una consulta para obtener las lecturas de glucosa por UID
    connection.query('SELECT * FROM Glucose_readings WHERE UID = ?', [UID], (error, results) => {
      if (error) {
        console.error('Error al obtener las lecturas de glucosa:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        res.status(200).json(results); // Devolver las lecturas de glucosa como JSON
      }
    });
  }

  function UpdateGlucoseReadingByNumber(req, res, Number, updatedGlucoseReading) {

    connection.query('SELECT * FROM Value_Categories', (error, valueCategories) => {
      if (error) {
        console.error('Error al consultar las categorías de valores:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        // Asignar la categoría según el nivel de glucosa
        const category = assignCategory(updatedGlucoseReading.Glucose_level, valueCategories);
        updatedGlucoseReading.Category = category;
  
        connection.query('UPDATE Glucose_readings SET ? WHERE Number = ?', [updatedGlucoseReading, Number], (error, results) => {
          if (error) {
            console.error('Error al actualizar el registro de glucosa:', error);
            res.sendStatus(500); // Error del servidor
          } else {
            if (results.affectedRows > 0) {
              // El registro de glucosa se actualizó correctamente
              res.sendStatus(200); // Código 200 para indicar éxito
            } else {
              // No se encontró un registro de glucosa con el Number proporcionado
              res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
            }
          }
        });
      }
    });
  }

  function DeleteGlucoseReading(req, res, Number) {
    // Realizar una consulta para eliminar el registro de glucosa por Number
    connection.query('DELETE FROM Glucose_readings WHERE Number = ?', [Number], (error, results) => {
      if (error) {
        console.error('Error al eliminar el registro de glucosa:', error);
        res.sendStatus(500); // Error del servidor
      } else {
        if (results.affectedRows > 0) {
          // Se eliminó correctamente al menos un registro
          res.sendStatus(204); // Código 204 para indicar que no hay contenido (eliminación exitosa)
        } else {
          // No se encontró un registro de glucosa con el Number proporcionado
          res.sendStatus(404); // Código 404 para indicar que no se encontró el recurso
        }
      }
    });
  }

module.exports = {
    CreateFood, UpdateFoodInformation, DeleteFood, GetUserFoods,
    CreateActivity, GetActivitiesByUID, UpdateActivity, DeleteActivity,
    CreateGlucoseReading, GetGlucoseReadings, UpdateGlucoseReadingByNumber, DeleteGlucoseReading
}


