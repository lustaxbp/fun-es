//crie uma função que receba 3 numeros como parametro e retorne o MENOR dentre eles. 
// nome : Luís Otávio Bordin Pereira
function maisOumenos(n1, n2, n3) {
    var menorN = 0;
    if (n1 < n2 && n1 < n3) {
        menorN = n1;
    }
    else if (n2 < n1 && n2 < n3) {
        menorN = n2;
    }
    else if (n3 < n1 && n3 < n2) {
        menorN = n3;
    }
    return menorN;
}
var teclado = require("prompt-sync")();
var num1 = parseInt(teclado("digite o primeiro numero: "));
var num2 = parseInt(teclado("digite o segundo numero: "));
var num3 = parseInt(teclado("digite o terceiro numero: "));
console.log("O menor n\u00FAmero \u00E9 ".concat(maisOumenos(num1, num2, num3)));
