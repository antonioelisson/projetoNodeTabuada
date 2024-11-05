//antes de fazer o import é necessário instalar o express com o comando npm install express no terminal
import express from "express";

const host = "0.0.0.0";
const porta = 3000;
const app = express();

function paginaInicial(requisicao, resposta){
    resposta.send(` <html>
                    <head>
                        <meta charset=UTF-8/>
                        <title>Tabuada</title>
                    </head>
                    <body>
                        <h1>Seja bem vindo!</h1>
                        <br/>
                        <h2>Tabuada Interativa</h2>
                        <h2>Digite o numero que deseja multiplicar e um limite para finalizar a multiplicação:</h2>
                        <h3>Digite como o modelo para calcular: http://localhost:3000/calcular?numero=1&limite=25</h3>
                    </body>`);
}

function calcular(requisicao, resposta){
    const numero = parseInt(requisicao.query.numero);
    const limite = parseInt(requisicao.query.limite);

    resposta.write('<h3>Tabuada do ' + numero + '</h3>');

    if(limite){
        resposta.write('<table>');
        for(let i=1; i <= limite; i++){ 
            var resultado = numero * i;
            
            resposta.write('<tr>');
            resposta.write('<td>' + numero + ' x ' + i + ' = ' + `${resultado}` + '</td>');
            resposta.write('</tr>');
        }
        resposta.write('</table>')
        resposta.end();
    }
    else{// se não foir informado o limite da multiplicação, será feito com o valor padrão 10
        resposta.write('<table>');
        for(let i=1; i <= 10; i++){ 
            var resultado = numero * i;
            
            resposta.write('<tr>');
            resposta.write('<td>' + numero + ' x ' + i + ' = ' + `${resultado}` + '</td>');
            resposta.write('</tr>');
        }
        resposta.write('</table>')
        resposta.end();
    }
}

app.get("/", paginaInicial); //http://localhost:3000/ <== é a raiz da aplicação

app.get("/calcular", calcular);

app.listen(porta, host, () => {
    console.log('Servidor em execução http://' + host + ':' + porta);
});