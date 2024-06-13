const exprexx= require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 5001;

application.listen(PORT, ()=>{
    console.log(`server running in port : http://localhost:${PORT}`);

});
