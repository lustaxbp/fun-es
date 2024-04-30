//Crie uma função que liste todos os números primos até 1000.
//Número primo é aquele que é divisível somente por 1 e por ele mesmo.
      // nome: Luís Otávio Bordin 
function listNprimo(n1: number=2, ultimo:number=1000): void{
    if (nPrimo(n1)){
        console.log(n1);
    }
}

function nPrimo(n1: number, divi: number=2): boolean{
    if (n1 % divi == 0){
        return n1 == divi;
    }
    if (divi * divi > n1){
        return true;
    }
    return nPrimo(n1,divi+1)
}