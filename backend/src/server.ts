import  express  from "express";
import cors from 'express'
import router from "./routes";

import pool from "./config/database";


pool.connect(function(err) {
    if(err){
        console.log(err);        
    } else {
        console.log('Conectado ao bando de dadods!');        
    }
})

const app = express();
const port = process.env.PORT || 3333;
  
  app.use(cors());

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.json())
app.use(router);

app.listen(port, ()=> console.log(`Servidor iniciado na porta http://localhost:${port}`))