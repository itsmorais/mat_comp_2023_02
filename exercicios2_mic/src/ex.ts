class Pessoa_mic {
    nome: string;
    idade: number;
    genero: string;

    constructor(nome: string, idade: number, genero: string) {
        this.nome = nome;
        this.idade = idade;
        this.genero = genero;
    }

}

class Estudante_mic extends Pessoa_mic {
    matricula: string;
    faculdade: string;

    constructor(nome: string, idade: number, genero: string, matricula: string, faculdade: string) {
        super(nome, idade, genero);
        this.matricula = matricula;
        this.faculdade = faculdade;
    }

}

const estudante1 = new Estudante_mic("João", 20, "Masculino", "2023001", "Fatec");

console.log(estudante1);