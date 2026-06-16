import leia from "readline-sync";

let vip = leia.keyInSelect(["sim","não"],"você é vip?");
let compras = leia.questionFloat("digite o valor dos produtos: ");


if (vip === 0 && compras >= 1000){
    console.log("você comprou um produto");
    console.log("como você tem vip, o valor total é: R$" + compras * 0.80);
}
else if (vip === 0 && compras >= 500){
    console.log("você comprou um produto");
    console.log("como você tem vip, o valor total é: R$" + compras * 0.90);
}
else if (vip === 1 && compras >= 250){
    console.log("você comprou um produto");
    console.log("como você não tem o vip, o valor total é R$" + compras * 0.95)
}
else{
    console.log("você comprou um produto");
    console.log("como sua compra foi menor que 250, você ficou sem desconto");
    console.log("valor total: "+ compras)
}