if (compra >= 500) {
    console.log("o valor total da compra: R$" + compra.toFixed(2));
    console.log("sem frete pois preço > 500R$");
}
else {

    if (dest === 0) {
        let total = compra * 1.10;
        console.log("São Paulo, com frete");
        console.log("Total: R$" + total.toFixed(2));
    }
    else if (dest === 1) {
        let total = compra * 1.15;
        console.log("Santa Catarina, com frete");
        console.log("Total: R$" + total.toFixed(2));
    }
    else if (dest === 2) {
        let total = compra * 1.20;
        console.log("Paraná, com frete");
        console.log("Total: R$" + total.toFixed(2));
    }
    else if (dest === 3) {
        let total = compra * 1.25;
        console.log("Rio Grande do Sul, com frete");
        console.log("Total: R$" + total.toFixed(2));
    }

}