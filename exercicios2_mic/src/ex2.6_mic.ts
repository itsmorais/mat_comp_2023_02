enum meses_do_ano_mic {
    Janeiro = 1, Fevereiro = 2, Marco = 3, Abril = 4, Maio = 5, Junho = 6, Julho = 7, Agosto = 8, Setembro = 9, Outubro = 10, Novembro = 11, Dezembro = 12
}

enum dias_da_semana_mic {
    Segunda = 1, Terca = 2, Quarta = 3, Quinta = 5, Sexta = 6, Sabado = 7, Domingo = 8
}

function fatorial_mic(numero: number): number {
    if (numero == 0) {
        return 1
    }
    else {
        return fatorial_mic(numero - 1) * numero
    }

}

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

