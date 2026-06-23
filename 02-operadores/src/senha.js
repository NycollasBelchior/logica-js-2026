import leia from 'readline-sync'

let senha = 1234

let senhadigitada = leia.questionInt("adivinha a senha: ")
if(senhadigitada === senha){
    console.log("acesso liberado")
}
else{
console.log("acesso negado")
}