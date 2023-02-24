let notas = [5.4, 10, 8];

let total = 0;

for (let i = 0; i < notas.length; i++) {
  console.log(` A ${i + 1 + "°"} nota do aluno é: ${notas[i]} `);
  total += notas[i];
}

let media = (total/3)

// if (media >= 7){
//     console.log("O aluno está APROVADO com a média: " + media);
// } else if( media <= 7){
//     console.log("O aluno está REPROVADO com a média: " + media);
// }

console.log( media >= 7 ?("O aluno está APROVADO com a média: " + media) : ("O aluno está REPROVADO com a média: " + media))
