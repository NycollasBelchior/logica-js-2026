import leia from 'readline-sync'

let prod = leia.questionFloat("digite o valor do produto: ")
let mreal = leia.questionInt("quantidade de moedas em 1 real: ")
let mcen50 = leia.questionInt("quantidade de moedas em 50 centavos: ") * 0.5
let mcen25 = leia.questionInt("quantidade de moedas em 25 centavos: ") * 0.25
let mcen10 = leia.questionInt("quantidade de moedas em 10 centavos: ") * 0.10
let mcen5 =leia.questionInt("quantidade de moedas em 5 centavos: ") * 0.05

let cofrinho = mreal + mcen50 + mcen25 + mcen10 + mcen5

if(cofrinho < prod){
    console.log("juntando as moedas, você tem: R$" + cofrinho)
    console.log("você não conseguiu comprar ,pois o produto custa: "+ prod)
    
}
else{
    console.log("juntando as moedas, você tem: R$" + cofrinho)
    console.log("você conseguiu comprar ,produto custou: "+ prod)
    console.log("no final sobrou: "+ (cofrinho - prod))
}
