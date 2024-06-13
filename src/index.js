const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 5001;

server.listen(PORT, ()=>{
    console.log(`server running in port : http://localhost:${PORT}`);

});

async function getConnection () {
    const conex = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user:process.env.DB_USER || "root",
        password:process.env.DB_PASS || "Izan2018!",
        database:process.env.DB_NAME || "moon",
    });

    await conex.connect();
    console.log('conexion con la BD' + conex.threadId);
    return conex;
}
// getConnection();

//endpoint busca todas las lunas

server.get('/moon', async(req, res)=>{

    try {
      
        const conn = await getConnection();
        const select = 'SELECT * FROM moon';
        const [result] = await conn.query(select);
        if (result.length === 0) {
            res.status(400),json({ message: 'El id no existe en la BD'});

        } else {
            res.status(200).json({ data: result });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
        
    }
});

//endpoint por id (campo de mi interés)

server.get('/moon/:id', async(req, res)=>{

    try {
        // const id = req.params.id;
        const { id } = req.params;
        const conn = await getConnection();
        const select = 'select * from moon where id = ?';
        const [result] = await conn.query(select, [id]);
        //hago validaciones
        if (result.length === 0) {
            res.status(400),json({ message: 'El id no existe en la BD'});

        } else {
            res.status(200).json({ data: result[0] });
        }
    } catch (error) {
        // console.log(error);
        res.status(400).json(error);
        
    }
});
