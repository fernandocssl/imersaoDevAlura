var fernando = {
  nome: "Fernando",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var marcella = {
  nome: "Marcella",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var kathleen = {
  nome: "Kathleen",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

var arrayJogadores = [fernando, marcella, kathleen];

function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates - (jogador.derrotas * 1);
  return pontos;
}

fernando.pontos = calculaPontos(fernando);
marcella.pontos = calculaPontos(marcella);
kathleen.pontos = calculaPontos(kathleen);

console.log(arrayJogadores);

function exibirInformacoesNaTela(arrayJogadores) {
  var elemento = "";
  for (var i = 0; i < arrayJogadores.length; i++) {
    elemento += "<tr><td>" + arrayJogadores[i].nome + "</td>";
    elemento += "<td>" + arrayJogadores[i].vitorias + "</td>";
    elemento += "<td>" + arrayJogadores[i].empates + "</td>";
    elemento += "<td>" + arrayJogadores[i].derrotas + "</td>";
    elemento += "<td>" + arrayJogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibirInformacoesNaTela(arrayJogadores);

function adicionarVitoria(i) {
  var jogadorGanhou = arrayJogadores[i];
  jogadorGanhou.vitorias++;
  jogadorGanhou.pontos = calculaPontos(jogadorGanhou);
  exibirInformacoesNaTela(arrayJogadores);
}

function adicionarEmpate(i) {
  var jogadorEmpatou = arrayJogadores[i];
  jogadorEmpatou.empates++;
  jogadorEmpatou.pontos = calculaPontos(jogadorEmpatou);
  exibirInformacoesNaTela(arrayJogadores);
}

function adicionarDerrota(i) {
  var jogadorPerdeu = arrayJogadores[i];
  jogadorPerdeu.derrotas++;
  jogadorPerdeu.pontos = calculaPontos(jogadorPerdeu);
  exibirInformacoesNaTela(arrayJogadores);
}