import leia from "readline-sync";

let f = 0.33;
let quant = 500


for (let i = 0; i <= quant; i++){
let valor = i * f
    console.log( "folha " + i +": R$" + valor.toFixed(2));
}