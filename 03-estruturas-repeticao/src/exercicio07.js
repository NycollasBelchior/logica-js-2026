import leia from "readline-sync";

let inicio = 0
let meio = 501
let meioMeio = 900
let fim = 1000

for (let i = 10; i <= fim; i++){
    if(i === meio){
        i= meioMeio
    }
    console.log(i )


}