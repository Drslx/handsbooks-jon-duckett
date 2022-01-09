/* Loop com (while) */

/* 
Este comando repete a instrução enquanto a condição for verdadeira. Quando a condição passa a ser falsa, os comandos do while não são executados e são executados os comandos após o while. A condição do while deve ser alterada dentro do while, como um contador.

Note que a condição é checada antes da instrução dentro do while.
*/
let contador = 1;
while (contador < 100) {
  contador += 1;
}


const notas = [10, 6, 8];
let indice = 0;
   while (indice < 3) {
       console.log(notas[indice]);
       indice++;
   }
