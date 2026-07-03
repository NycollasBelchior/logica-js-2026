import leia from "readline-sync";

let nE = leia.questionInt("digite um numero:")

console.log("o a tabuada do " + nE + " é: ")
for (let i = 0; i <= 10; i++){
    let mult = nE * i
    console.log(nE + " x "+ i + " = " + mult)
    
}