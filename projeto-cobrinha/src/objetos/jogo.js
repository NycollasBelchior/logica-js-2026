import { SIMBOLOS, CONFIGURACOES } from "../config/config.js";
import { cobra } from "./cobra.js";

function teclado() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdout.write("\x1b[?25l");
    process.stdin.on("keypress", (str, key) => {
        if (key.name === "w" && direcao !== "w") direcao = "w";
        if (key.name === "s" && direcao !== "s") direcao = "s";
        if (key.name === "a" && direcao !== "a") direcao = "a";
        if (key.name === "d" && direcao !== "d") direcao = "d";

        if (key.name === "q") {
            gameOver = true;
        }
    })
}

function desenhar() {
    var tela = "";
    tela += "=== JOGO DA COBRINHA ===\n";
    tela += "W A S D = MOVER | Q = sair\n";

    for (let y = -1; y <= CONFIGURACOES.altura; y++) {
        let linha = "";
        for (let x = -1; x <= CONFIGURACOES.largura; x++) {
            if (x === -1 || x === CONFIGURACOES.largura || y === -1 || y === CONFIGURACOES.altura) {
                linha += SIMBOLOS.parede;
            } else {
                let desenhouCobra = false;
                for (let i = 0; i < cobra.partes.length; i++) {
                    if (cobra.partes[i].x === x && cobra.partes[i].y === y) {
                        linha += (i === 0) ? SIMBOLOS.cabeca : SIMBOLOS.corpo;
                        desenhouCobra = true;
                    }
                }
                if (desenhouCobra === false) {
                    linha += SIMBOLOS.vazio
                }
            }
        }
        tela += linha + "\n"
    }
    console.clear()
    process.stdout.write("\x1b[H" + tela);
}

function iniciar(dificuldade) {
    desenhar()
}

export let jogo = {
    pontos: 0,
    fase: 1,
    vidas: 0,
    gameOver: false,
    dificuldade: null,
    velocidadeAtual: 150,
    iniciar: iniciar
}