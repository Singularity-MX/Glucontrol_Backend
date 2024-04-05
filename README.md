# Glucontrol Backend

## ¿Qué es Glucontrol?

Glucontrol es un backend desarrollado en Node.js utilizando Express, diseñado para una aplicación que permite a los usuarios registrar y controlar sus niveles de glucosa. Con Glucontrol, los usuarios pueden acceder a estadísticas y herramientas que les ayudan a monitorear y gestionar sus niveles de glucosa de manera efectiva.

## Requisitos
- **Node.js:** Se requiere Node.js para ejecutar el backend. Puede descargarlo e instalarlo desde [aquí](https://nodejs.org/).
- **npm:** npm es el administrador de paquetes de Node.js. Se instala automáticamente junto con Node.js.
- **Git:** Git es necesario para clonar el repositorio de Glucontrol. Puede encontrar instrucciones de instalación en [este enlace](https://git-scm.com/).

Puedes instalarlos de la siguiente forma:

 - **Arch:**
    ```bash
    sudo pacman -Syu
    sudo pacman -S nodejs npm git
    ```
  - **Debian y Ubuntu:**
    ```bash
    sudo apt update
    sudo apt install nodejs npm git
    ```
  - **Fedora:**
    ```bash
    sudo dnf install nodejs npm git
    ```

## Base de Datos

Glucontrol utiliza una base de datos PostgreSQL para almacenar los datos de los usuarios y sus niveles de glucosa. Debe crear una instancia de base de datos con los siguientes datos de conexión:

```javascript
const HOST_DB = process.env.HOSTDB || 'apps-posgrado-database.postgres.database.azure.com';
const USR_NAME = process.env.USERDB || 'rs17';
const PWD_DB = process.env.PASSWORD || 'Javier117';
const DB_NAME = process.env.DATABASE || 'glucontroldb';
const PORT_DB = process.env.PORT || 5432;
```
Estos datos pueden configurarse en el archivo SQL_CONECTION.js. Además, en la carpeta documents se proporciona el script necesario para crear la base de datos.

## Instrucciones para instalar
Para comenzar a utilizar Glucontrol, siga estos pasos:
1. Clone el repositorio de Glucontrol utilizando Git:
    ```bash
    git clone https://github.com/Singularity-MX/Backend-Glucontrol
    ```
2. Instale las dependencias utilizando npm:
    ```bash
    cd Backend-Glucontrol
    npm install
    ```
3. Inicie el servidor:
    ```bash
    npx nodemon index.js
    ```
## Endpoint de Vista
Una vez que el servidor esté en funcionamiento, puede acceder al endpoint de vista principal en la ruta /.

![La vista será la siguiente:](https://github.com/Singularity-MX/Backend-Glucontrol/blob/main/Documents/HomePageView.png?raw=true)


##  Licencia
Este proyecto está bajo la Licencia MIT. Consulte el archivo LICENSE para obtener más información.

## Créditos de Desarrollo
Desarrollado por [ReplacedSpace17](https://github.com/ReplacedSpace17).
Cuerpo Académico de Bioinformática y Tecnología Computacional (CABTC) -> TecNM Campus León (POSGRADO)


