import leia from 'readline-sync'

let nome1 = leia.question("digite seu nome: ")
let nome2 = leia.question("digite seu nome: ")

let valor1 = leia.questionFloat(nome1 + " digite o valor da sua compra: ")
let valor2 = leia.questionFloat(nome2 + " digite o valor da sua compra: ")
let valortotal = valor1 + valor2;
let media = (valor1 + valor2) / 2;

if (valor1 > 20 && valor2 > 20){
    console.log("o valor total da compra foi: "+ valortotal);
    console.log(nome1 + " e " + nome2 + " compraram produtos maiores que 20 reais" );
    console.log("o valor medio da compra é: " + media);
}

else if (valor1 > 20 ){
    console.log("o valor total da compra foi: "+ valortotal);
    console.log(nome1 +" comprou produtos maiores que 20 reais" );
    console.log("o valor medio da compra é: " + media);
}
else if (valor2 > 20 ){
    console.log("o valor total da compra foi: "+ valortotal);
    console.log(nome2 +" comprou produtos maiores que 20 reais" );
    console.log("o valor medio da compra é: " + media);
}
else{
    console.log("ninguem comprou produto");
 
}