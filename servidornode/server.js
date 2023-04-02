const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});