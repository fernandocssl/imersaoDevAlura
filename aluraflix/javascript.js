var arrayNomes = [];
var arrayImgs = [];
var i = 0;

function adicionarSerie() {
    var urlSerie = document.getElementById("imgSerie").value;
    if (urlSerie.endsWith(".png") || (urlSerie.endsWith(".jpg")) || (urlSerie.endsWith(".jpeg")) ) {
        arrayImgs.push(urlSerie);
        console.log(arrayImgs)
        var elementoNome = document.getElementById("nomeSerie").value;
        arrayNomes.push(elementoNome);
        console.log(arrayNomes)    
        var elementosNomesSeries = document.getElementById("apresentacao");
        for (i; i<arrayNomes.length; i++) {
            elementosNomesSeries.innerHTML = elementosNomesSeries.innerHTML + arrayNomes[i] + "<img src=" + arrayImgs[i] + ">";
        }
    } else {
        alert("Por favor, insira um formato de imagem válido. Extensões aceitas: .jpg, .jpeg, .png");
    } document.getElementById("nomeSerie").value = "";
    document.getElementById("imgSerie").value = "";
}

/* function excluirSerie() {
    var elementoExcluir = document.getElementById("delSerie").value;
    var indiceResultado = arrayNomes.indexOf(elementoExcluir);
        if (indiceResultado != (-1)) {
            arrayNomes.splice(indiceResultado, 1);
            arrayImgs.splice(indiceResultado, 1);
            var apresentacaoExcluir = document.getElementById("apresentacao").value;
                for (i=0; i<arrayNomes; i++) {
                    apresentacaoExcluir.innerHTML = apresentacaoExcluir.innerHTML + arrayNomes[i] + "<img src=" + arrayImgs[i] + ">";
                }
        } else {
            alert("Série não encontrada")
        } document.getElementById("delSerie").value = "";

}*/