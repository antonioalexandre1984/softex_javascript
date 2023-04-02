const pessoa = {
  nome: 'João',
  idade: 30,
  profissao: 'Desenvolvedor'
};

const frutas = ['Maçã', 'Banana', 'Morango'];

function listarPropriedades(obj) {
  console.log('Propriedades do objeto:');
  for (let prop in obj) {
    console.log(prop);
  }
}

function listarElementos(arr) {
  console.log('Elementos do array:');
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

listarPropriedades(pessoa);
listarElementos(frutas);
