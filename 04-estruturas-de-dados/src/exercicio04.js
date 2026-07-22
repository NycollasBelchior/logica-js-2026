import { pedirNumero } from "./utils/pedeNumeros.js";
/* Crie um algoritmo para ler 15 números inteiros e mostrar no final, os que forem maiores
ou igual a 10; */
export function exercicio04(){
    console.log("------exercicio 04-------")
let num = pedirNumero(15)

for(let i = 0; i < num.length; i++){
    if(num[i] >= 10){
        console.log(num[i])
    }
    
}
}