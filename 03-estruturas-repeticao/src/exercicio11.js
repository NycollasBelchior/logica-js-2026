import leia from "readline-sync";

/* 11) Foi feita uma pesquisa entre os habitantes de um a região e coletados os dados de altura
e gênero (0=masc , 1=fem) das pessoas. Faça um programa que leia os dados de 10 pessoas
e informe:
– a maior e a menor altura encontrada;
– a média de altura das mulheres;
– a média de altura da população;
– o percentual de homens na população. */
let masc = []
let fem = []

let altura
let menor;
let maior;
let total = 0;

for(let i = 0; i < 10; i++){
     altura = leia.questionFloat("digite sua altura: ")
    let gen = leia.keyInSelect(["masculino","feminino"],"seu genero");

    if (i === 0){
        menor = altura
        maior = altura
    }
    
    if (menor < altura){
        maior = altura
    }
    if (maior > altura){
        menor = altura
    } 
    
    if (gen === 0){
        masc.push(altura)
    }
    else if(gen ===1){
        fem.push(altura)
    }
    total += altura
}

 

console.log("a média da altura da população é: " + (total /10))
console.log("menor altura: " + menor);
console.log("maior altura: " + maior);
console.log("percentual de mulheres: " + fem.length / 10 * 100)




