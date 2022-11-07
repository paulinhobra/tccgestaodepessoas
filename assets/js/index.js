getYear();

function getYear(){
    var anoAtual = document.getElementById("ano");
    const dataAtual = new Date();

    anoAtual.innerHTML = dataAtual.getFullYear();
}