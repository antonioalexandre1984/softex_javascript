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
mostrarMenu();
const operacao = Number(prompt("Digite a operação desejada:"));
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número:"));

const resultado = calcular(operacao, num1, num2);
exibirResultado(resultado);
