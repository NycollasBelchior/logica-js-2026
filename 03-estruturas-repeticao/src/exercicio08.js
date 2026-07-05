/* 8) Crie um algoritmo para que o usuário entre com 6 números inteiros e positivos e mostre a
soma dos números ímpares e o produto (multiplicação) dos números pares. 
 */

import leia from "readline-sync";

let soma = 0;
let mult = 1;



for (let i = 0; i < 6 ; i++){
    let numero = leia.questionInt("digite um numero positivo: ")
while(numero < 0){
    numero = leia.questionInt("numero invalido, digite um numero positivo: ")
}
    if (numero % 2 === 0 ){
        mult = mult * numero
    }
    else {
        soma += numero
    }
}
console.log("soma dos numeros impares: " + soma )
console.log("multiplicação dos numeros pares: " + mult)
