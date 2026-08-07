import leia from "readline-sync";
import { DIFICULDADES } from "./config/config.js";
import { jogo } from "./objetos/jogo.js";


function mostrarMenu() {
    let dificuldade = DIFICULDADES
    console.log("--------------------------")
    console.log("     jogo da cobrinha     ")
    console.log("--------------------------")

    let opcao = leia.keyInSelect([
        "1- Fácil",
        "2- Médio",
        "3- Difícil"
    ], "escolha uma opcao")
    
    console.log(dificuldade)


    if (dificuldade === undefined) {
        console.log("Opção Inválida")
        return;
    }

    jogo.iniciar(dificuldade)
}
mostrarMenu()
