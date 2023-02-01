let original = [];
var novoArray = [];
let arrayBots = [5511999910621, 5521999816059, 556140040001, 551133350237, 5511974627106]
let cont = 0;
let vetorOriginal = document.getElementById("textNoBots").value


function receberLista(){
var ListaEnviada = document.getElementById("textNoBots").value;
var qtdIntervalo = document.getElementById("qtd").value;
console.log(qtdIntervalo);
original = ListaEnviada.split("\n")

for (let i = 0; i < original.length; i++) {

    if (cont == qtdIntervalo) {
        for (let j = 0; j < arrayBots.length; j++) {
            novoArray.push(arrayBots[j].toString().substr(2));
        }
        cont = 0;
        i--;
    }
    else {
        cont++;  
        novoArray.push(original[i].toString().substr(2));
    }

}


document.getElementById("textBots").value = (novoArray);

}