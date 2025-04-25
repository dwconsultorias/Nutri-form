const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  idade: Number,
  sexo: String,
  peso: Number,
  altura: Number,
  objetivo: String,
  restricoes: String,
  preferencias: String,
  atividade: String,
  frequencia: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);