var inOut = 0;
do {
    var teclado = require("prompt-sync")();
    console.log("Qual opera\u00E7\u00E3o deseja? Digite: ");
    console.log("+ --> Adi\u00E7\u00E3o");
    console.log("- --> Subtra\u00E7\u00E3o");
    console.log("* --> Multiplica\u00E7\u00E3o");
    console.log("/ --> Divis\u00E3o");
    console.log("s --> Sair");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    var numeroUm = 0;
    parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
    var numeroDois = 0;
    parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
    var resultado = 0;
    if (opcao == "+") {
        resultado = numeroUm + numeroDois;
        console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "-") {
        ;
        resultado = numeroUm - numeroDois;
        console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "*") {
        resultado = numeroUm * numeroDois;
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois));
        console.log("\u00E9 ".concat(resultado));
    }
    else if (opcao == "/") {
        resultado = numeroUm / numeroDois;
        console.log("O valor da divis\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois));
        console.log("\u00E9 ".concat(resultado));
    }
    else {
        console.log("! Algo deu errado !");
    }
    console.clear();
    console.log("Para continuar digite");
    console.log("0 --> Sair");
    console.log("1 --> Continuar");
    inOut = parseInt(teclado("Digite a op\u00E7\u00E3o: "));
} while (inOut != 0);
console.log("Fim de programa ...");
