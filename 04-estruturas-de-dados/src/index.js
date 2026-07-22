import leia from 'readline-sync'  
import {exercicio01}  from "./exercicio01.js";
import {exercicio02} from './exercicio02.js';
import { exercicio3 } from './exercicio3.js';
import { exercicio04 } from './exercicio04.js';
import { exercicio05 } from './exercicio05.js';



console.log("-------menu de exercicios------")

let exercicios = leia.keyInSelect([
    "exercicio 1",
    "exercicio 2",
    "exercicio 3",
    "exercicio 4",
    "exercicio 5",
    "exercicio 6",
    "exercicio 7",
    "exercicio 8",
    "exercicio 9",
    "exercicio 10",
    "exercicio 11",
    "exercicio 12",
    "exercicio 13"
],"escolha uma atividade para observar");

if (exercicios === 0){
    exercicio01()
}
else if (exercicios === 1){
    exercicio02()
}
else if (exercicios === 2){
    exercicio3()
}
else if (exercicios === 3){
    exercicio04()
}
else if (exercicios === 4){
    exercicio05()
}
else if (exercicios === 5){
    exercicio06()
}

