import leia from "readline-sync";

let inicio = 1000;
let fim = 1999;

while (inicio <= fim){
    if (inicio % 11 === 5){
        console.log("Numero: " + inicio)
    }
    inicio++;

}