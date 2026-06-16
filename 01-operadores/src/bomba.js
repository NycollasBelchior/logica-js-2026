import leia from "readline-sync"

let bomba = Math.floor(Math.random() * 4);

let qnt = 2
let escolha = leia.keyInSelect(["Fio Vermelho","Fio Verde", "Fio Amarelo","Fio Azul"],"corte um fio")

do {
    if (escolha === bomba) {
        console.log("você desarmou a bomba!!");
        break;
    }

    qnt--;

    if (qnt > 0) {
        console.log("você errou o fio! MAIS " + qnt + " tentativa(s)");
        escolha = leia.keyInSelect(
            ["Fio Vermelho","Fio Verde","Fio Amarelo","Fio Azul"],
            "corte um fio"
        );
    }

} while (escolha !== bomba && qnt > 0);

if(escolha !== bomba && qnt === 0){
    console.log("VAI EXPLODIR!!")
    console.log("---------BOOOMMMMMMMMMM----------")
}
