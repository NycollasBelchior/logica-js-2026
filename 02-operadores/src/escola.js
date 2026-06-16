import leia from 'readline-sync';

let nota1 = leia.questionFloat("digite sua primeira nota: ");
let nota2 = leia.questionFloat("digite sua segunda nota: ");
let nota3 = leia.questionFloat("digite sua terceira nota: ");
let nota4 = leia.questionFloat("digite sua penultima nota: ");
let nota5 = leia.questionFloat("digite sua ultima nota: ");
let falta = leia.questionInt("\ndigite suas faltas: ");


let frequencia = (200 - falta) / 200;
let freqpor = frequencia * 100;

let media = (nota1 + nota2 + nota3 + nota4 + nota5)/ 5;

if(media > 7 && freqpor > 75){
    console.log("você passou");
    console.log("media: "+ media);
    console.log("frequencia: "+ freqpor + "%");
} 
else {
    console.log("você reprovou");
    console.log("media: "+ media);
    console.log("frequencia: "+ freqpor + "%");
}


