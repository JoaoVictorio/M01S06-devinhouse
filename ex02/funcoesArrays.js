const alunos = [
  { nome: 'Vitor', nota1: 7, nota2: 10 },
  { nome: 'Caique', nota1: 9, nota2: 8 },
  { nome: 'Joao', nota1: 6, nota2: 7 },
  { nome: 'Maria', nota1: 7, nota2: 5 }
];

const alunosComMedia = alunos.map((aluno) => {
  const media = (aluno.nota1 + aluno.nota2) / 2;
  return { nome: aluno.nome, media: media };
});

const alunosOrdenados = alunosComMedia.sort((a, b) => b.media - a.media);

console.log(alunosOrdenados);