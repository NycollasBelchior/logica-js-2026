import leia from 'readline-sync'

let salario = leia.questionFloat("digite o valor do salario: ");
let emprestimo = leia.questionFloat("digite o valor do emprestimo desejavel: ");
let parc = leia.questionFloat("digite o valor de quantas parcelas");

let prestacao = emprestimo / parc;
let lim = salario * 0.30

if (prestacao > lim){
    console.log("salario: " + salario + "|| 30% do salario: " + lim )
    console.log("o valor do emprestimo é: "+ emprestimo + " , o valor das parcelas são: " + prestacao)
    console.log("você não pode pegar o emprestimo pois o emprestimo é menor que os 30% do salario" )
}

else{
    console.log("salario: " + salario + "|| 30% do salario: " + lim )
    console.log("o valor do emprestimo é: "+ emprestimo + " , o valor das parcelas são: " + prestacao)
    console.log("você pode pegar o emprestimo pois o emprestimo é maior que os 30% do salario" )
}


if(true){
    console.log(true);
}