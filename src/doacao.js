import leia from 'readline-sync'

console.log("----doaçao para criança esperança")
let doacao = leia.keyInSelect(["R$10","R$25","R$50","outro valor"],"selecione o quanto quer doar") +1;


switch(doacao){
    case 1: 
        console.log("você doou R$10");
     break;
    case 2: 
        console.log("você doou R$25");
        break;
    case 3: 
        console.log("você doou R$50");
        break;
    case 4:
        let opcao = leia.questionInt("digite o quanto quer doar: ");
        console.log("você doou: R$"+ opcao);
        break;
        default:
        console.log("você não doou dinheiro para a instituição criança esperança")
}


