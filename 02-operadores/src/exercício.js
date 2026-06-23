var preto = "0"
var marrom = "1"
var vermelho = "2"
var laranja = "3"
var amarelo = "4"
var verde = "5"
var azul = "6"
var violeta = "7"
var cinza = "8"
var branco = "9"
// MULTIPLICADORES
var pretomult = 1
var marrommult = 10
var vermelhomult = 100
var laranjamult = 1000
var amarelomult = 10000
var verdemult = 100000
var azulmult = 1000000
var violetamult = 10000000
var cinzamult = 100000000
var brancomult = 1000000000
// PORCENTAGEM
var dourado = 0.05
var prateado = 0.10
var nada = 0.20
// EXERCÍCIO 1
console.log("1 - Marrom – Preto – Vermelho – Dourado")
var ex1 = (marrom + preto) * vermelhomult
var ex1por = ex1 * dourado
console.log("O valor da resistencia é: " + (ex1 + ex1por) + ", " + (ex1 - ex1por) + " e " + ex1 + ".")
// EXERCÍCIO 2
console.log("2 - Vermelho – Vioeta – Marrom – Dourado")
var ex2 = (vermelho + violeta) * marrommult
var ex2por = ex2 * dourado
console.log("O valor da resistencia é: " + (ex2 + ex2por) + ", " + (ex2 - ex2por) + " e " + ex2 + ".")
// EXERCÍCIO 3
console.log("3 - Amarelo – Vioeta – Laranja – Dourado")
var ex3 = (amarelo + violeta) * laranjamult
var ex3por = ex3 * dourado
console.log("O valor da resistencia é: " + (ex3 + ex3por) + ", " + (ex3 - ex3por) + " e " + ex3 + ".")
// EXERCÍCIO 4
console.log("4 - Verde – Azul – Vermelho – Dourado")
var ex4 = (verde + azul) * verdemult
var ex4por = ex4 * dourado
console.log("O valor da resistencia é: " + (ex4 + ex4por) + ", " + (ex4 - ex4por) + " e " + ex4 + ".")
// EXERCÍCIO 5
console.log("5 - Laranja – Branco – Marrom – Prateado")
var ex5 = (laranja + branco) * marrommult
var ex5por = ex5 * prateado
console.log("O valor da resistencia é: " + (ex5 + ex5por) + ", " + (ex5 - ex5por) + " e " + ex5 + ".")
// EXERCÍCIO 6
console.log("6 - Cinza – Vermelho – Amarelo – Dourado")
var ex6 = (cinza + vermelho) * amarelomult
var ex6por = ex6 * dourado
console.log("O valor da resistencia é: " + (ex6 + ex6por) + ", " + (ex6 - ex6por) + " e " + ex6 + ".")
// EXERCÍCIO 7
console.log("7 - Azul – Cinza – Vermelho – Dourado")
var ex7 = (azul + cinza) * verdemult
var ex7por = ex7 * dourado
console.log("O valor da resistencia é: " + (ex7 + ex7por) + ", " + (ex7 - ex7por) + " e " + ex7 + ".")
// EXERCÍCIO 8
console.log("8 - Vermelho – Vermelho – Marrom – Dourado")
var ex8 = (vermelho + vermelho) * marrommult
var ex8por = ex8 * dourado
console.log("O valor da resistencia é: " + (ex8 + ex8por) + ", " + (ex8 - ex8por) + " e " + ex8 + ".")
// EXERCÍCIO 9
console.log("9 - Marrom – Verde – Laranja – Dourado")
var ex9 = (marrom + verde) * laranjamult
var ex9por = ex9 * dourado
console.log("O valor da resistencia é: " + (ex9 + ex9por) + ", " + (ex9 - ex9por) + " e " + ex9 + ".")
// EXERCÍCIO 10
console.log("10 - Amarelo – Verde – Vermelho – Dourado")
var ex10 = (amarelo + verde) * vermelhomult
var ex10por = ex10 * dourado
console.log("O valor da resistencia é: " + (ex10 + ex10por) + ", " + (ex10 - ex10por) + " e " + ex10 + ".")