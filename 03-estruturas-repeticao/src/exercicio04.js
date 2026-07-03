import leia from "readline-sync"

let quant = 5;
let menor;
let maior;

for (let i = 0; i < quant; i++) {
    let valores = leia.questionFloat("digite os valores: ")

    if (i === 0) {
        menor = valores;
        maior = valores;
    } else if (valores > maior) {
        maior = valores
    } else if (valores < menor) {
        menor = valores
    }
}
console.log(menor, maior)