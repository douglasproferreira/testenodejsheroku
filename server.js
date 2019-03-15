const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors()) 

mongoose
  .connect(
    'mongodb://app-node:app-node2019@ds253713.mlab.com:53713/app-node',    
    {
      useNewUrlParser: true
    })
  .then(() => console.log('MongoDB Connected - Server On In Port 3000'))
  .catch(err => console.log(err));

requireDir('./src/models');

// Rotas
app.get('*', function(req, res){
  res.sendfile('./views/index.html');
});

var porta = process.env.PORT || 8080;