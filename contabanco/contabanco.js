const Banco = {
  conta: "12345-6",
  saldo: 1000,
  tipoConta: "corrente",
  agencia: "0001",

  buscarSaldo: function () {
    return this.saldo;
  },

  deposito: function (valor) {
    this.saldo += valor;
    return "Depósito realizado com sucesso!";
  },

  saque: function (valor) {
    if (valor > this.saldo) {
      return "Saldo insuficiente para realizar o saque.";
    } else {
      this.saldo -= valor;
      return "Saque realizado com sucesso!";
    }
  },

  numeroConta: function () {
    return this.conta;
  },
};
