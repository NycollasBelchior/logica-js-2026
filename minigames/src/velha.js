import leia from 'readline-sync';

var matriz = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

var contador = 0
while(contador < 10){

    
    function pedirPosicao(){
    var linha = keyInSelect([0, 1, 2], "Selecione a linha: ")
    var coluna = keyInSelect([0, 1, 2], "Selecione a coluna: ")
    }

    matriz[linha][coluna] = "X"

    function desenhar(){
    for(var i = 0; i < matriz[0].length; i++){
        console.log(" " + matriz[i][0] + " | " + matriz[i][1] + " | " + matriz[i][2])
        if(i < 2){
            console.log("----------")
        }
    }}
}