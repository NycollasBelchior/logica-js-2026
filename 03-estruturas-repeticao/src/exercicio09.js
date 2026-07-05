/* 9) Faça um algoritmo que leia vários números e informe quantos números entre 100 e 200
foram digitados (o 100 e o 200 não contam), para as leituras quando o valor 0 (zero) for lido.
 */

import leia from "readline-sync";


let contador = 0

while(true){
    
    let num = leia.questionInt('digite um numero de 0 a 200')
    if (num !== 0) {
        if(num > 100 && num <200){
            contador++;   
        }
    }
    else{
        break
    }
}
console.log("numero informado: " + contador)
