const readline = require('readline-sync');

// Função tradicional sem parâmetros
function mostrarMenu() {
  console.log("=== Calculadora ===");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("===================");
}

// Função tradicional com parâmetros e retorno de valor
function calcular(operacao, num1, num2) {
  switch (operacao) {
    case 1:
      return num1 + num2;
    case 2:
      return num1 - num2;
    case 3:
      return num1 * num2;
    case 4:
      return num1 / num2;
    default:
      return "Operação inválida";
  }
}

// Arrow function com parâmetros e retorno de valor
const exibirResultado = (resultado) => {
  console.log(`O resultado é: ${resultado}`);
};

// Programa principal
try {
  mostrarMenu();
  const operacao = Number(readline.question("Digite a operação desejada:"));
  const num1 = Number(readline.question("Digite o primeiro número:"));
  const num2 = Number(readline.question("Digite o segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    console.log("Digite apenas números válidos");
  } else {
    const resultado = calcular(operacao, num1, num2);
    exibirResultado(resultado);
  }
} catch (err) {
  console.error(err);
}
