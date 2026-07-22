import leia from "readline-sync"
import { pedirNumero } from "./utils/pedeNumeros.js"
/* Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
Por fim exiba os dois vetores. */
export function exercicio01() {
    console.log("--------EXERCICIO 01---------")
    let num1 = pedirNumero(10)
    let num2= []

    for(let i = 0; i < num1.length; i++){
        num2[i] = num1[i] * 5
    }
    

    

    console.log("\nPrimeiro vetor: " + num1);
    console.log("\nSegundo Vetor: " + num2);
}