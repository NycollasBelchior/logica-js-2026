import leia from "readline-sync";

let vitorias = leia.questionInt("digite quantas partidas você ganhou: ");
let empates = leia.questionInt("digite quantas partidas você empatou: ");
let derrotas = leia.questionInt("digite quantas partidas você derrotas: ");

let pontosV = vitorias * 3
let pontosE = empates * 1
let pontosT = (pontosV + pontosE);

if (derrotas > 20){
    console.log("você foi desclassificado por derrotas");
}
else if(pontosT > 45 && pontosT < 70){
    console.log("total de pontos: "+ pontosT);
    console.log("você foi classificado");
}
else if (pontosT >= 70){
    console.log("total de pontos: "+ pontosT);
    console.log("você é campão");
}
else if (pontosT < 45){
    console.log("total de pontos: "+ pontosT);
    console.log("você fo desclasificado");
}





    
    








