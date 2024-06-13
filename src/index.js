const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 5001;

server.listen(PORT, ()=>{
    console.log(`server running in port : http://localhost:${PORT}`);

});

async function getConnection () {
    const conex = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Izan2018!",
        database:"moon",
    });

    await conex.connect();
    console.log('conexion con la BD' + conex.threadId);
    return conex;
}
getConnection();