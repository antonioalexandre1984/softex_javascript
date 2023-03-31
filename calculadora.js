let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let operador = prompt("Digite o operador (+, -, * ou /):");

let resultado;

switch (operador) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = Math.floor(num1 / num2);
    let resto = num1 % num2;
    console.log("Resultado: " + resultado + " Sobrou: " + resto);
    break;
  default:
    console.log("Operador inválido!");
}

if (operador !== "/") {
  console.log("Resultado: " + resultado);
}
