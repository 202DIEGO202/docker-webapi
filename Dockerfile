# Usa una imagen de Node.js
FROM node:latest

# Crea el directorio de la aplicación
RUN mkdir -p /usr/src/app

# Establece el directorio de trabajo en la aplicación
WORKDIR /usr/src/app

# Copia los archivos de la aplicación
COPY package*.json ./
COPY app.js .

# Instala las dependencias
RUN npm install
RUN npm install cors


# Expone el puerto 3000 (cámbialo si es necesario)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

