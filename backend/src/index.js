const express = require('express'); //estamos importando o express
const cors = require('cors');
const routes = require('./routes'); //passamos o './' para o require saber que se trata de um arquivo e nao um pacote

const app = express(); //vai conter a aplicacao

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);//ao acessar localhost:3333 vamos cair na aplicacao 