import leia from "readline-sync";

console.log("-------------------------------");
console.log("----- JOGO DO NÚMERO MÁGICO -----");
console.log("-------------------------------");

let jogo = leia.keyInSelect(["vs maquina", "1v1 | two players"]);

if (jogo === 0) {
    let dif = leia.keyInSelect(["facil", "medio", "dificil"]);

    if (dif === 0) {
        dif1();
    }
    else if (dif === 1) {
        dif2();
    }
    else if (dif === 2) {
        dif3();
    }
}
else if (jogo === 1) {
    pvp1();
}

function dif1() {

    console.log("Número mágico entre 0 e 10!");

    let number = Math.floor(Math.random() * 11);
    let tentativas = 0;
    let ganhou = false;

    while (ganhou === false) {

        let chute = leia.questionInt("Tente acertar o número mágico: ");
        tentativas++;

        if (chute > number) {
            console.log("O número mágico é menor.");
        }
        else if (chute < number) {
            console.log("O número mágico é maior.");
        }
        else {
            console.log("Você venceu!");
            console.log("Tentativas: " + tentativas);
            ganhou = true;
        }
    }
}

function dif2() {

    console.log("Número mágico entre 0 e 50!");

    let number = Math.floor(Math.random() * 51);
    let tentativas = 0;
    let ganhou = false;

    while (ganhou === false) {

        let chute = leia.questionInt("Tente acertar o número mágico: ");
        tentativas++;

        if (chute > number) {
            console.log("O número mágico é menor.");
        }
        else if (chute < number) {
            console.log("O número mágico é maior.");
        }
        else {
            console.log("Você venceu!");
            console.log("Tentativas: " + tentativas);
            ganhou = true;
        }
    }
}

function dif3() {

    console.log("Número mágico entre 0 e 100!");

    let number = Math.floor(Math.random() * 101);
    let tentativas = 0;
    let ganhou = false;

    while (ganhou === false) {

        let chute = leia.questionInt("Tente acertar o número mágico: ");
        tentativas++;

        if (chute > number) {
            console.log("O número mágico é menor.");
        }
        else if (chute < number) {
            console.log("O número mágico é maior.");
        }
        else {
            console.log("Você venceu!");
            console.log("Tentativas: " + tentativas);
            ganhou = true;
        }
    }
}

function pvp1() {

    let number = leia.questionInt("Digite o número mágico (mestre): ");
    console.clear();

    let tentativas = 0;
    let ganhou = false;

    while (ganhou === false) {

        let chute = leia.questionInt("Tente acertar o número mágico: ");
        tentativas++;

        if (chute > number) {
            console.log("O número mágico é menor.");
        }
        else if (chute < number) {
            console.log("O número mágico é maior.");
        }
        else {
            console.log("Você venceu!");
            console.log("Tentativas: " + tentativas);
            ganhou = true;
        }
    }
}