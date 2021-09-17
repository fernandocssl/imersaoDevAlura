function ConverterEmDolar() {
  var elementoDolar = document.getElementById("valorDolar");
  var dolarBruto = elementoDolar.value;
  var dolarDecimal = parseFloat(dolarBruto);
  var dolarParaReal = dolarDecimal * 5.27;
  var elementoDolarConvertido = document.getElementById("valorDolarConvertido");
  var valorDolarConvertido =
    "O valor inserido após conversão é de R$ " + dolarParaReal.toFixed(2);
  elementoDolarConvertido.innerHTML = valorDolarConvertido;
}

function ConverterEmEuro() {
  var elementoEuro = document.getElementById("valorEuro");
  var euroBruto = elementoEuro.value;
  var euroDecimal = parseFloat(euroBruto);
  var euroParaReal = euroDecimal * 6.19;
  var elementoEuroConvertido = document.getElementById("valorEuroConvertido");
  var valorEuroConvertido =
    "O valor inserido após conversão é de R$ " + euroParaReal.toFixed(2);
  elementoEuroConvertido.innerHTML = valorEuroConvertido;
}