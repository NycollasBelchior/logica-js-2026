import leia from 'readline-sync';

   
console.log("deseja entrar no seu banco?")
let banco = leia.keyInSelect(["sim","não"])
   let dinheiro = 1000;
   let dinheiroG = 0;

while(banco !== 1){
    console.log("saldo: "+ dinheiro)
    console.log("oque deseja?")
    let escolha = leia.keyInSelect(["depositar","retirar"])
    if (escolha === -1){
            break;
        }

    else if (escolha === 0){
        console.log("saldo: R$" + dinheiro)
        console.log("cofrinho: R$"+ dinheiroG)
        
        let valor = leia.questionFloat("digite o quanto quer depositar: ")
            if (valor <= dinheiro){
                dinheiro -= valor
                dinheiroG += valor
                console.log("valor guardado: R$" + valor);
                console.log("saldo atual: R$"+ dinheiro);
                console.log("saldo no cofrinho: R$"+ dinheiroG)
            }
            else{
                console.log("dinheiro não encontrado no seu saldo")
            }
        }
        else if(escolha === 1){
            let valorR = leia.questionFloat("digite o quanto quer retirar: ")
            if (valorR <= dinheiroG){
                dinheiro += valorR;
                dinheiroG -= valorR;
                console.log("valor retirado: R$"+ valorR);
                console.log("saldo atual: R$" + dinheiro);
                console.log("saldo no cofrinho: R$" + dinheiroG)
            }
            else {
                console.log("saldo não encontrado no seu cofrinho!");
            }
        }
}