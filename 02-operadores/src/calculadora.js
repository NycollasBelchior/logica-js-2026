import leia from "readline-sync";

let n1 = leia.questionFloat("digite um numero: ");
let n2 = leia.questionFloat("digite outro numero: ");

let escolha = leia.keyInSelect(["operador: +","operador: -","operador: *","operador: /"],"digite o operador desejavel")+1

if (escolha === 1){
    let soma = n1 + n2;
    console.log("a soma dos dois numeros é: "+ soma.toFixed(2));
}
else if(escolha === 2){
    let menos = n1 - n2;
    console.log("a subtração dos dois numeros é: "+ menos.toFixed(2));
}
else if(escolha === 3){
    let mult = n1 * n2;
    console.log("a multiplicação dos dois numeros é: " + mult.toFixed(2));
}

switch(escolha){
    case 4:
        let div = n1 / n2;

        if(n2 === 0){
            console.log("você não pode fazer a divisão por 0");
        }
        else{
            console.log("divisão dos dois numeros: " + div.toFixed(2));
        }

        break;
}
    