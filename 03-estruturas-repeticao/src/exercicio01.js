import leia from 'readline-sync';

let n = leia.questionInt("digite um numero: ")

console.log("os numeros de 0 a "+n)
for(let i = 0; i <= n ; i++){
    console.log(i)
}