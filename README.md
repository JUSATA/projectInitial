WEB API CRUD USERS AND login WITH AUTH jwt.

NOTA: El proyecto se debe ejecutar sobre un contenedor de docker por lo tanto debe estar instalado en el computador de ejecucion de la api.
1. abrir raiz del projecto
2. npm install
3. se agrego la funcionalidad de que debe estar logueado para poder ver info .. ruta   http://localhost:3000/authRoutes/userinfo  PONER EL TOKEN DE LOGIN  EN EL BEARER  AUTH EN EL POSTMAN INFO AUTH USER

ejecutar el proyecto local
1. ir a la carpeta DATABASE_BACKUP y ejecutar en mysql el script.
2. al proyecto  npm run dev para subir el server.
3. probar el postman con las rutas del crud y auth.

ejecutar el proyecto con imagen docker
1. se debe instalar docker.
2. ir a la raiz del proyecto ejecutar el comando docker compose up.
3. probar el postman con las rutas del crud y auth.