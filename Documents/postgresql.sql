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

