import leia from "readline-sync";

let temperatura = leia.question("digite a temperatura atual da maquina: ");

if(temperatura < 50){
    console.log("resfriamento crítico");
}else if(temperatura >= 50 && temperatura <= 89){
    console.log("normal");
}else if(temperatura >= 90 && temperatura <= 110){
    console.log("atenção");
}else {
    console.log("superaquecimento");
}