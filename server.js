const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Usuario = require('./models/Usuario');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado'))
  .catch(err => console.error(err));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/processar_formulario', async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save();
  res.send('Dados enviados com sucesso!');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));