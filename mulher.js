const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Lara do Carmo',
        imagem: 'https://github.com/account',
        minibio: 'Estudante de TI'
    })
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta: ", porta);
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostrarPorta);