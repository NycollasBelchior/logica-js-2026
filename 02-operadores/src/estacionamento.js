import leia from "readline-sync";

let fidelidade = leia.keyInSelect(["sim","não"]);
let estacionamento = leia.keyInSelect(["até 1 hora","1 a 3 horas","3 a 6 horas","acima de 6 horas"])



if(estacionamento === 0 ){
  let preço1 = 8
  console.log("o tempo estacionado foi até 1 hora");

  console.log("preço total: R$"+ preço1);
  
  if (fidelidade === 0){
    preço1 *= 0.85
    console.log("Preço com desconto: R$" + preço1.toFixed(2));
  }
  else{
    console.log("sem fidelidade? sem desconto")
  }
}

else if(estacionamento === 1){
    let preço2 = 15
    console.log("o tempo estacionado foi de 1 a 3 horas");
    console.log("preço total: R$"+ preço2);
    if (fidelidade === 0){
      preço2 *= 0.85
      console.log("Preço com desconto: R$" + preço2.toFixed(2));
    }
    else{
      console.log("sem fidelidade? sem desconto")
    }
  }
  else if(estacionamento === 2){
    let preço3 = 22
    console.log("o tempo estacionado foi de 3 a 6 horas");
    console.log("preço total: R$"+ preço3);
    if (fidelidade === 0){
      preço3 *= 0.85;
      console.log("Preço com desconto: R$" + preço3.toFixed(2));
    }
    else{
      console.log("sem fidelidade? sem desconto")
    }
  }
  else if(estacionamento === 3){
    let preço4 = 30
    console.log("o tempo estacionado foi mais de 6 horas");
    console.log("preço total: R$"+ preço4);
    if (fidelidade === 0){
      preço4 *= 0.85
      console.log("Preço com desconto: R$" + preço4.toFixed(2));
    }
    else{
      console.log("sem fidelidade? sem desconto")
    }
  }



