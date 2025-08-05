# Usa una imagen oficial de Node
FROM node:18

# Crea directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos de la app
COPY . .

# Copia el script wait-for-it.sh al contenedor
COPY wait-for-it.sh /usr/local/bin/wait-for-it.sh
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Expone el puerto (ajústalo si usas otro)
EXPOSE 3000

# Comando para ejecutar tu app (será sobreescrito por docker-compose)
CMD [ "node", "index.js" ]
