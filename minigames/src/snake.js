import leia from "readline-sync";
const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";
const ALTURA = 15; //Y
const LARGURA = 30; //X

let cobraX = [10];
let cobraY = [7];
let comidaX = Math.floor(Math.random() * LARGURA)
let comidaY = Math.floor(Math.random() * ALTURA)
let pontos = 0;
let direcao = "d";
let gameOver = false;

function desenhar() {
    let tela = "";
    tela += "=== JOGO DA COBRINHA ===\n";
    tela += "W A S D = MOVER | Q = Sair\n";
    tela += "pontos " + pontos + "\n\n";

    for (let y = -1; y <= ALTURA; y++) {
        let linha = "";

        for (let x = -1; x <= LARGURA; x++) {
            if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
                linha += PAREDE;
            } else if (x === comidaX && y === comidaY) {
                linha += COMIDA;
            }
            else {
                let desenhocobrinha = false

                for (var i = 0; i < cobraX.length; i++) {
                    if (cobraX[i] === x && cobraY === y) {
                        linha += (i ===0) ? CABECA : CORPO;
                        desenhocobrinha = true;
                    }
                }
                if (desenhocobrinha === false){
                    linha += VAZIO
                }
            }
        }
        tela += linha + "\n"
    }
    process.stdout.write("\x1b[H" + tela);
}

desenhar();