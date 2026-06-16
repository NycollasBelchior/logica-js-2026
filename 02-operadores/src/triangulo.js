
import leia from "readline-sync";

let ladoA = leia.questionFloat("Digite o lado A: ");
let ladoB = leia.questionFloat("Digite o lado B: ");
let ladoC = leia.questionFloat("Digite o lado C: ");

if (ladoA + ladoB > ladoC &&
    ladoA + ladoC > ladoB &&
    ladoB + ladoC > ladoA) {

    console.log("É possível formar um triângulo!");

    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo Equilátero");
        console.log("Todos os lados são iguais.");
    }
    else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo Isósceles");
        console.log("Dois lados são iguais.");
    }
    else {
        console.log("Triângulo Escaleno");
        console.log("Todos os lados são diferentes.");
    }

} else {
    console.log("Não é possível formar um triângulo.");
}

