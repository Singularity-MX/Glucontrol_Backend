CREATE TABLE "users" (
  "UID" VARCHAR(255) PRIMARY KEY,
  "Email" VARCHAR(255),
  "Password" VARCHAR(255)
);

CREATE TABLE "personal_information" (
  "UID" VARCHAR(255) PRIMARY KEY,
  "Nombre" VARCHAR(255),
  "ApellidoPaterno" VARCHAR(255),
  "ApellidoMaterno" VARCHAR(255),
  "FechaNacimiento" DATE,
  "Altura" INT,
  "Peso" INT,
  "IMC" DOUBLE PRECISION
);

CREATE TABLE "foods" (
  "FID" VARCHAR(255) PRIMARY KEY,
  "UID" VARCHAR(255),
  "Food_name" VARCHAR(255),
  "Classification" VARCHAR(255)
);

CREATE TABLE "activities" (
  "AID" VARCHAR(255) PRIMARY KEY,
  "UID" VARCHAR(255),
  "Activitie_name" VARCHAR(255),
  "Classification" VARCHAR(255)
);

CREATE TABLE "value_Categories" (
  "Category_Name" VARCHAR(255) PRIMARY KEY,
  "Minimum_Value" INT,
  "Maximum_Value" INT
);

CREATE TABLE "glucose_readings" (
  "UID" VARCHAR(255),
  "FID" VARCHAR(255),
  "Cantidad" VARCHAR(255),
  "AID" VARCHAR(255),
  "Duration" INT,
  "Glucose_level" INT,
  "Category" VARCHAR(255),
  "Registration_date" DATE,
  "Hour" DATE
);


/*
user: admin@admin.com
pass:  Javier12345


token UID: 
e7786597-f773-4494-926e-f9e87332105a


//////////////////////////////////////////////////////////SEED DATA
-- Agregar un usuario en la tabla "users"
INSERT INTO "users" ("UID", "Email", "Password")
VALUES ('e7786597-f773-4494-926e-f9e87332105a', 'admin@admin.com', 'Javier12345');

-- Agregar información personal en la tabla "personal_information"
INSERT INTO "personal_information" ("UID", "Nombre", "ApellidoPaterno", "ApellidoMaterno", "FechaNacimiento", "Altura", "Peso", "IMC")
VALUES ('e7786597-f773-4494-926e-f9e87332105a', 'Juan', 'Gómez', 'López', '1990-03-15', 175, 70, 22.86);



-- Agregar alimentos de prueba
INSERT INTO "foods" ("FID", "UID", "Food_name", "Classification")
VALUES ('1', 'e7786597-f773-4494-926e-f9e87332105a', 'Manzana', 'Frutas');

INSERT INTO "foods" ("FID", "UID", "Food_name", "Classification")
VALUES ('2', 'e7786597-f773-4494-926e-f9e87332105a', 'Pollo a la parrilla', 'Proteínas');

INSERT INTO "foods" ("FID", "UID", "Food_name", "Classification")
VALUES ('3', 'e7786597-f773-4494-926e-f9e87332105a', 'Ensalada de espinacas', 'Verduras');

INSERT INTO "foods" ("FID", "UID", "Food_name", "Classification")
VALUES ('4', 'e7786597-f773-4494-926e-f9e87332105a', 'Pizza', 'Dulces');

INSERT INTO "foods" ("FID", "UID", "Food_name", "Classification")
VALUES ('5', 'e7786597-f773-4494-926e-f9e87332105a', 'Yogur', 'Productos lácteos');

-- Agregar actividades de prueba
INSERT INTO "activities" ("AID", "UID", "Activitie_name", "Classification")
VALUES ('1', 'e7786597-f773-4494-926e-f9e87332105a', 'Caminata', 'Ejercicio');

INSERT INTO "activities" ("AID", "UID", "Activitie_name", "Classification")
VALUES ('2', 'e7786597-f773-4494-926e-f9e87332105a', 'Trabajo de oficina', 'Trabajo');

INSERT INTO "activities" ("AID", "UID", "Activitie_name", "Classification")
VALUES ('3', 'e7786597-f773-4494-926e-f9e87332105a', 'Natación', 'Deporte');

INSERT INTO "activities" ("AID", "UID", "Activitie_name", "Classification")
VALUES ('4', 'e7786597-f773-4494-926e-f9e87332105a', 'Lectura', 'Estudiar');

INSERT INTO "activities" ("AID", "UID", "Activitie_name", "Classification")
VALUES ('5', 'e7786597-f773-4494-926e-f9e87332105a', 'Descanso', 'Reposo');


*/

