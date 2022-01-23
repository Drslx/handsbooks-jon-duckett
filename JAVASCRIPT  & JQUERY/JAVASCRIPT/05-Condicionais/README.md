# Condicionais if else else if

Usamos condicionais para mudarmos o fluxo durante a execução de um algoritmo e podem ser combinados com operadores lógicos e aritméticos.
IF{

}

ELSE IF{

}

ELSE{

}

/- Exemplo : var pesoPet = 7;

if (pesoPet <= 4) {
console.log("Abaixo do Peso");
} else if (pesoPet > 10) {
console.log("Acima do Peso");
} else {
console.log("Peso normal: " + pesoPet, "Kg");

# Switch

As instruções switch são suas amigas aqui — elas tomam uma única expressão / valor como uma entrada e, em seguida examinam várias opções até encontrarem um que corresponda a esse valor, executando o código correspondente que o acompanha. Aqui está mais um pseudocódigo, para você ter uma ideia:

let pesoPet = 10;

switch (pesoPet){
case 8:
console.log("Abaixo")
break;
case 10:
console.log("Peso Normal")
break;
default:
console.log("Fim")
}

! Você não precisa incluir a seção default — você pode omiti-la com segurança se não houver chance de que a expressão possa se igualar a um valor desconhecido. Se houver uma chance disso, você precisará incluí-lo para lidar com casos desconhecidos.

# Ternario

O operador condicional (ternário) é o único operador JavaScript que leva três operandos: uma condição seguida por um ponto de interrogação ( ?), uma expressão a ser executada se a condição for verdadeira seguida por dois pontos ( :) e, finalmente, a expressão a ser executada se a condição é falsa . Este operador é freqüentemente usado como um atalho para a if instrução.

/- Exemplo: var age = 26;
var beverage = (age >= 21) ? "Beer" : "Juice";
console.log(beverage); // "Beer"

# ! Dica.

Colocar primeiro o codigo com maior probabilidade de retornar true em operacoes OR.
E primeiro com maior probabilidade de retornar false em operacoes AND.
