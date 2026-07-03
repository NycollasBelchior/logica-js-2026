import leia from 'readline-sync';

let n = leia.questionInt("digite um numero: ")


while (n >= 0){
    console.log(n);
    n--;
}