const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
    {
        nome: 'Lara do Carmo',
        imagem: 'https://github.com/account',
        minibio: 'Estudante de TI'
    },
    {
        nome: 'Dandara Fialho',
        idade: '22',
        minibio: 'Estudante'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostrarPorta() {
    console.log("Servidor criado e rodando na porta: ", porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta);