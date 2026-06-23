import leia from 'readline-sync'

import leia from 'readline-sync'

let Ud = leia.question("digite o ultimo numero da placa do carro: ");

/* if (Ud === "0" || Ud === "1"){
    console.log("você não pode usar na segunda feira")
}
else if (Ud === "2" || Ud === "3"){
    console.log("você não pode usar na terça")
}

else if (Ud === "4" || Ud === "5"){
    console.log("você não pode usar na quarta")
}

else if (Ud === "6" || Ud === "7"){
    console.log("você não pode usar na quinta")
}

else if (Ud === "8" || Ud === "9"){
    console.log("você não pode usar na sexta")
}

else if (Ud === "10"){
    console.log("você não pode usar na sabado")
}
 */

switch (Ud){
    case "1":
        case "2" : console.log("você não pode usar na segunda feira");

break;

case "3":
    case "4":
        console.log("você não pode andar na terça feira");
        break;

case "5":
    case "6":
        console.log("você não pode andar na quarta feira");
        break;

case "7":
    case "8":
        console.log("você não pode usar na quinta feira ");
        break;

case "9":
    case "10":
        console.log("você não pode usar na sexta feira")
        break;

        default:
            console.log("placa invalida")
}

