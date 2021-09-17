var numeroSorteado = parseInt(Math.random() * 11);
console.log(numeroSorteado);
var chances = 3;

function Chutar() {
  var palpite = parseInt(document.getElementById("valor").value);
  if (palpite == numeroSorteado) {
    alert("Parabéns! Você acertou.");
  } else if (chances == 0) {
    alert("Suas chances acabaram.\nRecarregue a página para sortear um novo número.");
  } else if (palpite < 0 || palpite > 10) {
    alert("Por favor, indique um número válido.");
  } else {
    if (palpite > numeroSorteado) {
      chances--;
      alert("Você errou.\nO número sorteado é MENOR que isso.\nTentativas restantes: " + chances + ".");
    } else if (palpite < numeroSorteado) {
      chances--;
      alert("Você errou.\nO número sorteado é MAIOR que isso.\nTentativas restantes: " + chances);
    }
  }
}