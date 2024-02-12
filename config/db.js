const mysql =require("mysql2");
const dotenv = require('dotenv');
dotenv.config();

// const connection = mysql.createConnection({
//      host: 'mysql',
//      user: process.env.MYSQLDB_USER,
//      database: process.env.MYSQLDB_DATABASE,
//      password: process.env.MYSQLDB_PASSWORD

// })
const connection = mysql.createConnection({
    host: process.env.MYSQLDB_HOST,
    port: '3306',
    user: process.env.MYSQLDB_USER,
    database: process.env.MYSQLDB_DATABASE,
    password: process.env.MYSQLDB_PASSWORD

})
module.exports=connection.promise();

