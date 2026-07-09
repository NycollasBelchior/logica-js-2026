import leia from "readline-sync";

var num = leia.questionInt("Digite a quantidade de termos:");

var a = 1;
var b = 1;
var c;

for (var i = 1; i <= num; i++) {
    if (i == 1) {
        console.log(a);
    } else if (i == 2) {
        console.log(b);
    } else {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}