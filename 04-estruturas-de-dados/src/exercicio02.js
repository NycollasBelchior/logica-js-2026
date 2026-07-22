import leia from 'readline-sync';
import { pedirNumero } from './utils/pedeNumeros.js';
/* Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
somatório desses números na tela. Após exibir a soma, o programa deve mostrar
também os números que o usuário digitou, um por linha.
 */
export function exercicio02(){
    console.log("-----exercicio 02 -----")
 
    let num1 = pedirNumero(5);
    let soma = 0;

    for (let i = 0; i < num1.length; i++){
        soma += num1[i]
        console.log(num1[i])
    }
    console.log("a soma dos números: " + soma)
}
