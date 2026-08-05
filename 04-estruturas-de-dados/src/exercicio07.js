/* Crie um vetor de 50 posições, um chamado pai e uma vetora
de 50 posições chamada mãe. Estes dois vetores devem ser
preenchidos com valores aleatórios. Depois, crie mais um
vetorzinho de 50 posições chamado filho. Este vetorzinho filho
deve ser preenchido com as características genéticas pares
do pai e com as características genéticas ímpares da mãe */

export function exercicio07(){
    let mae = []
    let pai = []
    let son = []

    for(let i = 0; i <= 50; i++){
     mae[i] = Math.floor(Math.random() * 50) + 1
     pai[i] = Math.floor(Math.random() * 50) + 1
    }
    console.log("\npai: " + pai)
    console.log("\nmae: " + mae)

    for(let i = 0; i <= 50; i++){
        if(pai[i]% 2 === 0){
            son.push(pai[i])
        }
        else if(mae[i] % 2 === 1){
            son.push(mae[i])
        }
    }

    
    console.log("\nfilho: " + son)
    }

