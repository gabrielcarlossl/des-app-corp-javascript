let notas = [8.8, 7.7, 10.0];

let total = 0;
for (let i = 0; i < notas.length; i++) {
  console.log(` A ${i + 1 + "°"} nota é: ${notas[i]} `);
  total += notas[i];
}

console.log("A média do aluno é: " + total / 3);
