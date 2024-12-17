//chama a função e retorna o valor em uma variavel
let somatorio = calculadora();

function calculadora(a, b) {
  let vitorias = 15;
  let derrotas = 10;
  let saldo = vitorias - derrotas;
  let nivel = 25;

  // estrutura do nível de Rank
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  }
  return { saldo: saldo, nivel: nivel }; //objeto para retorno de saldo e nível
}

console.log(`O herói tem um saldo de ${somatorio.saldo} e está no nível de ${somatorio.nivel}`);
