import leia from "readline-sync"

export function pedirNumero(number){
    let lista = [];
    for(let i = 0; i < number; i++){
        lista[i] = leia.questionInt("digite um numero: ")
    }
    return lista;
}