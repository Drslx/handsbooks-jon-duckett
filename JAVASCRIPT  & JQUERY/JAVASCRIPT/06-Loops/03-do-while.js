/* Loop com (do while) */

/* 
Assim como o while, este comando repete a instrução enquanto a condição for verdadeira, porém a condição é verificada após a instrução do while. Portanto, se o contador for alterado dentro da instrução, isso afetará a verificação da condição.

O comando do while é usado quando é necessário executar o bloco de instruções interno pelo menos uma vez
*/
let numeroVagas = 10;
let novoParticipantes = 9;

do {
  numeroVagas -= novoParticipantes;
  console.log("Vagas Salvas", +novoParticipantes);
  console.log("Vagas Livres", +numeroVagas);
  break;
} while (numeroVagas > novoParticipantes);
