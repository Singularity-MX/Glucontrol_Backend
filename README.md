# Glucontrol Backend

Backend para la aplicación **Glucontrol**, encargado de la gestión y almacenamiento de datos relacionados con el monitoreo y control glucémico desarrollado cómo parte del proyecto de residencias profesionales, para la obtención del título correspondiente a la licenciatura "*Ingeniería en sistemas computacionales*". Este proyecto fué realizado en el **Cuerpo Académico de Bioinformática y Tecnología Computacional** adscrito en el Departamento de Estudios de Posgrado e Investigación (DEPI) en el **Tecnológico Nacional de México campus León**.


## Tabla de Contenidos
- [Descripción](#descripción)

- [Tecnologías](#tecnologías)

- [Instalación y Ejecución](#instalación-y-ejecución)

- [Ejecución Local con Node.js](#ejecución-local-con-nodejs)

- [Ejecución con Docker](#ejecución-con-docker)

- [Estructura del Proyecto](#estructura-del-proyecto)

- [Licencia](#licencia)

- [Contacto](#contacto)

## Descripción

Este repositorio contiene el backend del sistema Glucontrol, que provee APIs REST para la aplicación móvil. Está construido con Node.js y Express, utilizando una base de datos MySQL para la persistencia de datos.

El proyecto **Glucontrol App**, programado utilizandp flutter, se encuentra en el siguiente repositorio:
https://github.com/Singularity-MX/Glucontrol_App
## Tecnologías

- Node.js 18

- Express

- MySQL 8

- Docker (para contenerización)

- Jest (para testing)

- Dotenv (para manejo de variables de entorno)

- UUID (para generación de identificadores únicos)

- Cors (para manejo de políticas CORS)

## Instalación y Ejecución

### Ejecución Local con Node.js

1. Clonar el repositorio:

```bash
git clone https://github.com/Singularity-MX/Glucontrol_Backend.git
cd Glucontrol_Backend
```
2. Instalar dependencias:
```bash
npm install
```
3. Crear la base de datos:
```bash
CREATE DATABASE glucontrol_db;
```
4. Ejecutar el script de inicialización en la base de datos:
```bash
sudo mysql -u root -p glucontrol_db < db/init.sql
```
5. Configurar variables de entorno en el archivo .env en la raíz del proyecto:
```bash
HOSTDB=localhost
USERDB=root
PASSWORD=tu_password
DATABASE=glucontrol_db
PORT=3306
```
5. Ejecutar la aplicación:
```bash
npm start
```
Validar que el backend esté corriendo en el http://localhost:3000/

### Ejecución con Docker
1. Clonar el repositorio:

```bash
git clone https://github.com/Singularity-MX/Glucontrol_Backend.git
cd Glucontrol_Backend
```
2. Crea el archivo .env en la raíz del proyecto con las siguientes variables (ajústalas según tu configuración):

```bash
HOSTDB=db
USERDB=root
PASSWORD=tu_password
DATABASE=glucontrol_db
PORT=3306
```
3. Construye y levanta los contenedores con Docker:
	⚠️ Asegúrate de tener docker y docker compose instalados.
```bash
docker compose up --build
```

La API estará disponible en: http://localhost:3000/

## Estructura del Proyecto

La organización del proyecto está diseñada para facilitar la escalabilidad y el mantenimiento. Los módulos principales se encuentran distribuidos en carpetas independientes según su funcionalidad (autenticación, monitoreo, alertas, configuración). Los scripts SQL para la inicialización de la base de datos están en la carpeta `db`. El archivo principal de entrada es `index.js`, que coordina la carga de configuración y la inicialización de los módulos. Las configuraciones globales y la conexión a la base de datos están separadas en archivos específicos para promover la modularidad y reutilización. Además, se incluye una carpeta para pruebas unitarias y otra para recursos estáticos, garantizando una estructura clara y ordenada.

```text
Glucontrol_Backend/
│
├── db/          # Scripts SQL de inicialización
├── Module1/        # Autenticación u otro módulo
├── Module2/        # Monitoreo de glucosa
├── Module3/        # Alertas, reportes, etc.
├── Module4/        # Configuración / usuarios
├── node_modules/     # Dependencias de Node.js
├── public/        # Archivos estáticos
├── test/         # Pruebas unitarias e integración
│
├── .env          # Variables de entorno (local)
├── Dockerfile       # Imagen Docker
├── docker-compose.yml   # Orquestación con Docker
├── index.js        # Punto de entrada
├── SQL_CONECTION.js    # Conexión a la base de datos
├── variablesGlobales.js  # Variables globales del sistema
├── wait-for-it.sh     # Espera activa para DB (Docker)
└── README.md       # Documentación del proyecto

```

## Licencia
Este proyecto está licenciado bajo los términos de la [Licencia MIT](LICENSE).

## Contacto

Para dudas, reportes de errores, sugerencias o contribuciones al proyecto, puedes ponerte en contacto con el equipo de desarrollo:

-  👤 **Autor principal:** Javier Gutiérrez [@ReplacedSpace17](https://github.com/replacedspace17)
  
-  🏫 **Institución:** Tecnológico Nacional de México campus León
  
-  📧 **Correo:** replacedspace17@gmail.com
  
También puedes abrir un _issue_ en el repositorio para reportar errores o solicitar nuevas funcionalidades.

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⡤⠤⠤⠤⠤⠤⠤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠤⠖⢉⠭⠀⠴⠘⠩⡢⠏⠘⡵⢒⠬⣍⠲⢤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⣡⠔⠃⠀⠰⠀⠀⠀⠀⠈⠂⢀⠀⢋⠞⣬⢫⣦⣍⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⢫⣼⠿⠁⠀⠀⠀⠐⠀⠀⠰⠀⠢⠈⠀⠠⠀⢚⡥⢏⣿⣿⣷⡵⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢓⣽⡓⡅⠀⠀⠀⠄⠀⠀⠄⠀⠁⠀⠀⠌⢀⠀⡸⣜⣻⣿⣿⣿⣿⣼⡀⠀⠀⠀⢀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⡤⣤⣄⣠⠤⣄⠀⠀⠀⠀⠀⠀⠀⢀⣧⣿⡷⠹⠂⠀⠂⠀⢀⠠⠈⠀⠌⠀⠁⢈⠀⠄⢀⡷⣸⣿⣿⣿⣿⣿⣧⠃⠀⡴⢋⢠⣤⣦⣬⣕⢤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣔⣵⣿⣻⣯⣍⣉⠚⢕⢆⠀⠀⠀⠀⠀⢸⢾⣽⡷⡂⠀⠀⠄⠂⠀⡀⠄⠂⠀⠌⠀⡀⠀⢀⡾⣯⢿⣿⣿⣿⣿⣿⣿⠰⠸⠠⢠⣾⣿⣿⣷⣿⣷⣕⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣼⣿⣿⠿⠿⢿⣿⣇⡛⡻⣧⠀⠀⠀⠀⢼⢸⡟⡧⣧⠀⠃⠀⡀⠄⠀⢀⠠⠘⠀⠠⠀⠀⡟⢧⣛⣿⣿⣿⣿⣿⣿⣧⠇⠀⡇⢻⣿⣿⣿⠟⠻⣿⣿⣇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⠁⣠⣤⠀⠙⢿⣿⡤⢘⣆⠀⠀⠀⢹⣼⣿⡽⠖⠁⠀⢤⠀⠀⡐⠀⢀⠐⠈⠀⢠⠖⠙⠣⠟⣻⢿⣿⣟⣿⡿⠃⠀⠀⠃⢼⣿⣧⠀⠀⠀⠸⣿⣣⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣿⣿⣆⣿⡟⠀⠀⠀⣿⡇⠰⢸⠀⠀⠀⡸⡻⡕⠉⠀⠀⡐⠀⠈⠁⠀⠀⢠⠀⡴⠀⡠⠀⢀⠤⡲⠟⣉⠻⣿⣟⠁⠀⠀⠀⡅⢺⣿⣿⠃⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠈⠙⠛⠉⠀⠀⠀⣀⡿⣗⠧⣼⠀⠄⡎⣿⣇⣧⣀⠑⢆⠀⠀⠀⢹⢄⢀⢧⠊⢀⠊⠀⠘⡡⣪⡴⠛⢻⣷⣜⣿⣦⠀⠀⡀⡿⣸⣿⣿⡆⠀⠀⡠⢐⠫⠉⠩⠭⣗⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢠⢹⣷⣻⠇⣿⠘⡀⣿⣿⣿⣿⠛⠛⢦⣙⠄⠀⢈⣫⢼⠀⠤⠁⠀⣠⣾⣿⡇⠀⠐⠂⢻⣿⣟⣿⡇⢠⠃⣧⣿⣿⣾⠁⢀⢎⣴⡶⡿⢿⣟⣷⢮⡝⢿⣷⠤⡀⠀
⠀⠀⠀⠀⠀⠀⠈⣽⣯⢿⣣⡹⢰⠘⣿⡿⣹⣿⠀⠀⠹⣿⡿⣷⣬⣯⣾⣷⣤⣴⣾⡟⣍⡿⠃⠀⠀⠀⢸⣿⣿⣩⣒⣵⣷⣿⣿⡿⠃⠀⡞⢺⣿⣿⣯⢿⠉⠀⠉⠛⢦⣻⣇⠘⡆
⠀⠀⠀⠀⠀⠀⣀⣿⣾⡾⣿⣵⡢⠳⢿⣷⢹⣿⣆⠀⠀⠈⠉⢉⣽⢟⣿⠟⢻⢿⣷⣄⡁⠀⠀⠀⠀⣀⣾⡟⣍⣿⣿⣿⣿⣿⣿⡗⠀⠀⠇⣽⣿⣿⣿⡼⠀⠀⣠⡤⣀⠿⠏⣴⠇
⠀⠀⠀⠀⠀⠀⠸⡼⣿⣿⣽⣿⣿⣶⣬⣿⣯⢿⣷⣥⠶⣒⣶⣾⠏⠐⠙⠀⠈⠚⡌⢪⣿⣧⣖⠦⡭⠿⢛⣼⣿⣿⢿⣿⣿⡿⠝⠁⠀⠰⢀⣿⣿⣾⣿⡇⠀⠀⠻⢿⡝⠲⠛⠋⠀
⠀⠀⠀⠀⠀⠀⠀⠉⢿⣿⣿⣿⣿⣿⣿⡿⠻⢷⣮⣉⣭⣡⣟⡱⠀⠀⡀⢀⡞⢀⢠⡀⠹⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣟⠋⠀⠀⠀⡠⡡⣹⣿⣿⣿⠿⠡⢀⣀⠀⠾⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⠽⢿⢿⣻⡿⠈⢀⣶⣿⣿⣿⣿⡽⠃⢀⡴⣰⣿⢤⣓⢿⣿⣄⠙⣻⣷⡟⣿⣿⣿⣽⡻⣿⠿⠧⡶⣒⢭⣺⣽⣿⠟⢍⢀⠀⡉⠑⢶⣯⡲⣄⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣀⡀⠀⠀⠀⣟⣷⣞⡟⠉⣴⡿⣯⣷⣿⣿⡟⡡⢀⣜⣼⣿⣿⣎⢳⢿⢻⣿⡄⠑⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣟⣾⣿⣿⢃⣠⣤⢖⡾⢷⡲⣆⡳⣿⣮⢢⡄⠀⠀
⠀⠀⡔⣩⢦⣐⣈⣦⣄⡠⢗⣿⣾⢁⣼⢏⣿⣿⣿⣿⡟⠐⣠⢝⣾⣿⣿⣿⣯⡟⣷⣿⣻⣿⣄⢈⢆⠻⢿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡧⢨⣲⣷⣿⠋⣟⣶⣀⣳⡖⣿⣇⣃⠀⠀
⠀⣘⡸⣞⣿⣿⣿⣿⣿⣿⣿⡿⠁⣺⣣⣿⣿⣿⣿⠎⢀⢢⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣢⢀⠡⡘⢪⡯⡻⣿⣿⣿⣿⣿⣿⣻⣟⢧⣽⣿⣿⠀⠀⣎⣱⡏⣏⣿⣯⡽⠀⠀
⠀⣿⣧⣼⣿⡟⠛⠛⠿⢟⠟⣁⣼⣿⣿⠛⢉⡜⠁⡠⣠⣷⢿⣿⡿⣿⣿⣿⣿⠟⠉⠙⠛⢯⣽⣯⠷⣄⠑⠜⠑⡷⡜⢿⠿⠟⠛⠉⠀⢸⢺⣾⣿⣿⣷⣄⣀⠏⣱⣿⣿⣿⠀⠀⠀
⠀⢹⣿⣾⣿⣿⣤⡤⠔⢑⣡⣾⡿⡿⠁⡠⠋⠀⡀⢀⣿⡟⣿⣿⣿⡙⣿⣻⣿⡄⠀⠀⠀⠀⠉⠻⣿⣟⣧⡄⠀⠘⣟⢦⡱⣄⠀⠀⠀⢸⣼⣿⢿⣿⣿⣷⣤⣾⣿⣿⣿⠏⠀⠀⠀
⠀⠀⠹⢿⣿⠏⣰⣧⣾⣿⣿⠟⠋⠀⡰⠡⡡⠀⣠⣿⣿⣿⣿⣿⣿⣗⢸⣿⣿⣷⠀⠀⠀⠀⠀⠀⠱⡹⣟⣿⣦⡁⠈⠳⢕⢄⠑⠂⠐⢾⣿⣿⣿⣿⣿⠛⠿⠟⠛⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣯⣼⣿⣿⠋⠁⠀⠀⠀⠀⡇⠐⠀⢠⣿⣿⡝⣿⠃⠈⢻⡞⢸⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠉⢻⣷⣾⣿⣦⡄⠀⠀⠈⠐⢺⣽⣿⣿⡎⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣻⡟⠁⠀⠀⠀⠀⠀⢸⡇⠀⢀⣿⣿⣿⣿⠏⠀⠀⢸⠳⣜⣹⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⡿⢿⣿⣿⣷⣶⣶⣶⣿⣿⢟⣻⣿⢟⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠸⣿⣿⡦⠀⠀⠀⠀⠀⠘⡇⠰⣼⡿⡿⣾⡏⠀⠀⠀⢸⠣⣹⣾⣿⡹⠀⡠⢄⣂⢤⠀⠀⠀⠀⠀⠈⠉⠻⣟⢿⣾⣚⣿⣿⣿⣿⣽⡏⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢠⣾⢛⣿⡟⠀⠀⠀⠀⠀⠀⢷⣀⢻⣷⣟⣻⡇⠀⠀⢀⢯⣅⣿⣷⣿⠇⣜⣾⣿⣿⣿⣧⣀⠀⠀⠀⠀⠀⠀⠈⠉⠸⠿⣿⠏⠘⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠈⠛⠛⠋⠀⠀⠀⠀⠀⠀⠀⠈⢻⡯⢿⣿⡿⡴⣀⡠⣪⡷⣽⣿⣿⡿⢚⣿⣿⡟⠀⠙⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⢹⡈⠛⠿⠽⢞⢋⠜⠻⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠒⠛⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
