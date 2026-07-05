



/* 10) Valentina tem 1.50m e cresce 2 centímetros por ano, enquanto Joãozinho, seu irmão
mais novo, tem 1.40m e cresce 3 centímetros por ano. Crie um algoritmo que mostre quando
(quantos anos) Enzo será mais alto que Valentina. */

import leia from "readline-sync";

let alturaV = 150
let alturaJ = 140
let contA = 0;
let anoV = 2;
let anoJ = 3


while(alturaJ <= alturaV){ 
        alturaJ += anoJ;
        alturaV += anoV;
        contA++;  
}

console.log("anos: " + contA)
console.log("altura do joao: " + alturaJ)
console.log("altura da vitoia: " + alturaV)






