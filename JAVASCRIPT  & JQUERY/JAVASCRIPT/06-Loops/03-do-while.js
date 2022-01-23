/* Loop com (do while) 
- A diferença do loop while e  que do while as instruções no bloco vem antes da condicao e instruções sao executadas  ao menos uma vez.
*/

// Exemplo simples do loop do while.

let i = 1;
let msg = "";

do {
  msg += i + " x 5 = " + i * 5;
} while (i < 1);

console.log(msg);
