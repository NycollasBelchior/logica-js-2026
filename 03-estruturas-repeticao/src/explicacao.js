import leia from "readline-sync"

/* let n1 = 0
let n2 = 0

while(n1 <= 3){
    n1++;
    console.log("não consigo dormir")
}

console.log("---------")
console.log("abaixo do while")
console.log("---------")

do{
n2 += 3;
console.log(n2)
}while(n2 < 10)


    console.log("---------")
console.log("abaixo for")
console.log("---------")

for(let i = 0 ; i <= 3 ; i++){
    console.log("não consigo dormir")
}


console.log("---------")
console.log("---------")
console.log("---------")
console.log("---------")
console.log("---------")

let senha = "";
let tentativas = 5;

while(senha !== "1234" && tentativas > 0){
    senha = leia.question("digite a senha de 4 digitos: ");

    if (senha !== "1234"){
tentativas--;
console.log("senha incorreta")
console.log("tentativas: " + tentativas)
    }
 

if(tentativas > 0){
        console.log("senha CORRETA")
    }
    else{
        console.log("voce não tem mais tentativas")
    }
} */

    let somaNotas = 0;
    let quantidade = 5;
    let contador = 1;
/* 
    while( contador <= quantidade){
        let notas = leia.questionFloat("digite sua nota: ")
        somaNotas += notas;
        contador++;
    }
    let media = somaNotas / 5;
    console.log("media: " + media.toFixed(1))
 */
 

    for (let i = 1 ; i <= quantidade; i++){
        let notas = leia.questionFloat("digite sua nota: ")
        somaNotas += notas;
    }
    let media = somaNotas / quantidade
    console.log("media: " + media)
