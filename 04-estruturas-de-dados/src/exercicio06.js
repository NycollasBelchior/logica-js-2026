
/* 
Criem um algoritmo que tenha dois vetores de 30 posições,
um para armazenar a mínima de cada dia e outro para a
máxima;
- Usando a função Math.random(), gerem dois valores de
temperatura para o dia. Estes valores devem estar entre 12 e
35 graus.
- De posse destes dois valores gerados, coloquem o menor no
vetor de mínimas e o maior no vetor de máximas. */
export function exercicio06(){

let minimas = []
let maximas = []
let dia = 1

for(let i = 0; i < 30; i++){
    
    let temp1 = Math.floor(Math.random() * (30 - 12 + 1) )+ 12 
    let temp2 = Math.floor(Math.random() * (30 - 12 + 1) ) + 12  

    if (temp1 < temp2){
        maximas.push(temp2)
        minimas.push(temp1)
    }
    else{
        maximas.push(temp1)
        minimas.push(temp2)
    }
    console.log("dia: " + dia);
    console.log("temp maximas: " + maximas[i])
    console.log("temp minima: " + minimas[i])
    dia++;
}
}