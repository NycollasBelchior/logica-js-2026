import { pedirNumero } from "./utils/pedeNumeros.js";

/* Faça um algoritmo para ler um vetor com 10 elementos e inverter a posição destes
elementos, de tal modo que o primeiro elemento venha a ser o último depois da
inversão;
 */

export function exercicio05(){
    let num = pedirNumero(10)
    let vetor = [];
    let j = 0
    
    for(let i = 9; i >= 0; i--){
        vetor[j] = num[i]
        j++
    }

    console.log(num)
    console.log(vetor)
}