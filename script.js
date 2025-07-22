const aluno = {
  nome: "Maria Oliveira",
  idade: 16,
  notas: [7.5, 8.0, 6.5],
  

  calcularMedia: function () {
    const soma = this.notas.reduce((total, nota) => total + nota, 0);
    return soma / this.notas.length;
  }
};


const { nome, idade } = aluno;


const novaNota = 9.0;
const notasAtualizadas = [...aluno.notas, novaNota];


function verificarSituacao(media) {
  return media >= 7
    ? "Aprovado(a)"
    : "Reprovado(a)";
}


console.log("=== Boletim do Aluno ===");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);

console.log("Notas:");
for (const nota of notasAtualizadas) {
  console.log(`- ${nota}`);
}

const mediaFinal = notasAtualizadas.reduce((soma, nota) => soma + nota, 0) / notasAtualizadas.length;
console.log(`Média final: ${mediaFinal.toFixed(2)}`);

const situacao = verificarSituacao(mediaFinal);
console.log(`Situação: ${situacao}`);
