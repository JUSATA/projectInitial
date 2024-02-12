const express=require('express');
const bodyParser= require('body-parser');
const authRoutes= require('./src/routers/authRoutes');
const userRoutes= require('./src/routers/userRoutes');
const app=express();

//SWAGGER DOC
const swaggerUI= require("swagger-ui-express");
const swaggerJsDoc= require("swagger-jsdoc");

//ENVIROMENT GLOBALS
const dotenv = require('dotenv');
dotenv.config();


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routers/*.js'], // files containing annotations as above
  };

app.use(bodyParser.json());
app.use('/authRoutes',authRoutes);
app.use('/userRoutes',userRoutes);

const swaggerSpec = swaggerJsDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const PORT = process.env.NODE_LOCAL_PORT;
app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
});
