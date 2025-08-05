# Glucontrol Backend

Backend para la aplicación Glucontrol, encargado de la gestión y almacenamiento de datos relacionados con el monitoreo y control glucémico.

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Instalación y Ejecución](#instalación-y-ejecución)
  - [Ejecución Local con Node.js](#ejecución-local-con-nodejs)
  - [Ejecución con Docker](#ejecución-con-docker)
- [Configuración](#configuración)
- [Testing](#testing)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Descripción

Este repositorio contiene el backend del sistema Glucontrol, que provee APIs REST para la aplicación móvil. Está construido con Node.js y Express, utilizando una base de datos MySQL para la persistencia de datos.

---

## Tecnologías

- Node.js 18
- Express
- MySQL 8
- Docker (para contenerización)
- Jest (para testing)
- Dotenv (para manejo de variables de entorno)
- UUID (para generación de identificadores únicos)
- Cors (para manejo de políticas CORS)

---

## Instalación y Ejecución

### Ejecución Local con Node.js

1. Clonar el repositorio:
```bash
git clone https://github.com/Singularity-MX/Glucontrol_Backend.git
cd Glucontrol_Backend

2. Instalar dependencias:
```bash
npm install

3. Configurar variables de entorno:
```bash
HOSTDB=localhost
USERDB=root
PASSWORD=tu_password
DATABASE=glucontrol_db
PORT=3306

4. Ejecutar la aplicación:
```bash
npm start

