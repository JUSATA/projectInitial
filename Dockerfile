# Usa la imagen oficial de Node.js como base
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios
COPY package*.json ./
# Instala las dependencias
RUN npm install
COPY . .
# Exponer el puerto en el que escucha tu aplicación Express
EXPOSE 3000

CMD ["node", "app.js"]