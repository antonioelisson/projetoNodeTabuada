//antes de fazer o import é necessário instalar o express com o comando npm install express no terminal
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();


app.listen(porta, host, () => {
    console.log('Servidor em execução http://' + host + ':' + porta);
});