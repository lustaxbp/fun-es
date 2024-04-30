//Crie uma função que liste todos os números primos até 1000.
//Número primo é aquele que é divisível somente por 1 e por ele mesmo.
// nome: Luís Otávio Bordin 
function listNprimo(n1, ultimo) {
    if (n1 === void 0) { n1 = 2; }
    if (ultimo === void 0) { ultimo = 1000; }
    if (nPrimo(n1)) {
        console.log(n1);
    }
}
function nPrimo(n1, divi) {
    if (divi === void 0) { divi = 2; }
    if (n1 % divi == 0) {
        return n1 == divi;
    }
    if (divi * divi > n1) {
        return true;
    }
    return nPrimo(n1, divi + 1);
}
