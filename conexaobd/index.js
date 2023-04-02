const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senha',
  database: 'nome_do_banco'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  }
});

/* Conexão com o banco de dados estabelecida com sucesso! */
/* 
Erro ao conectar ao banco de dados: Error: ER_ACCESS_DENIED_ERROR: Access denied for user 'root'@'localhost' (using password: YES) */


