class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  obterInformacoes() {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
  }
}

const livros = [
  new Livro('Depois daquela Viagem', 'Valéria Piassa Polizzi', 1997),
  new Livro('Senhor dos Anéis', 'J. R. R. Tolkien', 1954),
  new Livro('Dota', 'Ricardo Caetano', 2016)
];

livros.forEach(livro => {
  console.log(livro.obterInformacoes());
});
