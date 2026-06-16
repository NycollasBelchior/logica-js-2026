import leia from "readline-sync"

let macas = leia.questionInt("digite a quantidade de macas: ")
let preço = 0.30

if (macas < 12){
    console.log("você comprou: " + macas)
    console.log("cada maçã custa 0.30 , sendo assim o preço total é: "+ macas * preço)
}
else{
    console.log("você comprou: " + macas)
    console.log("cada maçã custa 0.25 , sendo assimo  preço total é: "+  macas * 0.25)
}