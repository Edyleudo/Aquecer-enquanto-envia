let original = [];
var novoArray = [];
let arrayBots = [11999910621, 21999816059, 6140040001, 1133350237, 11974627106]
let cont = 0;
let vetorOriginal = document.getElementById("textNoBots").value


function receberLista(){
var ListaEnviada = document.getElementById("textNoBots").value;
var qtdIntervalo = document.getElementById("qtd").value;
console.log(qtdIntervalo);
original = ListaEnviada.split("\n")
var sem55 = "+55";
var com55 = "+";

for (let i = 0; i < original.length; i++) {

    // if (cont == qtdIntervalo) {
    //     for (let j = 0; j < arrayBots.length; j++) {
    //         novoArray.push(arrayBots[j].toString());
    //     }
    //     cont = 0;
    //     i--;
    // }
    // else {
    //     cont++;  
    //     novoArray.push(original[i].toString());
    // }

    if (qtdIntervalo == "1"){
        novoArray.push(com55.concat(original[i].toString()));
    }

    else if(qtdIntervalo == "Não") {
        novoArray.push(sem55.concat(original[i].toString()));

    }
    else {
        novoArray.push(original[i].toString());

    }

}


document.getElementById("textBots").value = (novoArray);

}