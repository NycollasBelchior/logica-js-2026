import leia from 'readline-sync';
import { pedirNumero } from './utils/pedeNumeros.js';
/* Crie um algoritmo para ler 10 números inteiros e mostrar os números pares deste vetor; */

export function exercicio3(){

    console.log("---- exercicio 03----")
    let vetor1 = pedirNumero(10);

    for(let i =0; i < vetor1.length; i++){
        if(vetor1[i] % 2 === 0){
            console.log(vetor1)
        }
    }
    
}