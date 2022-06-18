// Expressões de funcao chamadas imediatamente

/* 
! Sao executadas quando o interpretador se depara com elas.
Quando usar funções anónimas e IIFEs.
Elas sao usadas para o codigo que so precisa ser executado uma vez dentro de uma tarefa,
em vez de ser chamado repetidamente por outras parte do script. Por exemplo.
1: Como agrupamento quando uma funcao e chamada (para calcular um valor dessa funcao).
2: Para atribuir o valor de uma propriedade a  um objeto.
3: Em rotinas de tratamento de evento(handlers) e ouvintes de eventos(Capitulo 6 ?), para executar uma tarefa quando ocorre um evento.
4: Para evitar conflitos entre dois scripts que podem usar os mesmo nomes de variaveis(Capitulo 99 ?).

*/

/* 
Exemplo:1 
O parêntese de fechamento antes de ponto e virgula, informa o interpretador para chamar a funcao,
imediatamente, os outros parenteses sao para garantir que o interpretador  trate isso como expressão.

! Sintaxe (function () {codigo} )();
*/

let area = (function () {
  var width = 3;
  var heigth = 2;
  return width * heigth;
})();


console.log(area);

/* 
! IFFEs sao comumentes usados como um invólucro em torno de um bloco de codigo,
todas as variaveis dentro dessa funcao sao protegidas de variaveis em outros scripts,
que podem ter o mesmo nome, isso e o conceito de escopo.
*/
