# 2. DEFINIÇÕES MATEMÁTICAS
- Dupla: Michael Morais e Thiago Brito
#### 2.1. Efetue uma definição, através de enumeração, de todos os membros da sua família, considerando apenas parentesco direto de pais, irmãos e filhos.
```
membros_da_familia = Marco,Andreia,Auane
```
#### 2.2. Efetue uma definição, através de enumeração, de cursos existentes na instituição de ensino em que você está estudando.
```
cursos = Desenvolvimento de software multiplataforma, geoprocessamento,meio ambiente
```
#### 2.3. Efetue uma definição, através de enumeração, de números primos. Um número é dito primo se só possui como divisor ele mesmo e o número um.
```
numeros_primos = 1,2,3,5,7,...
```
#### 2.4. Efetue uma definição ostensiva, de um colega de classe.
#### 2.5. Efetue uma definição recursiva de uma sequência numérica cujos elementos são obtidos multiplicando-se, a partir do segundo elemento, o elemento anterior por 3. Considere que o primeiro elemento vale 2.
```
Primeiro termo da sequência numérica = 2
Termos da sequência numérica = X_k, com X_k expresso pela fórmula X_k = (X_k -1) * 3

Sequência numérica = {2,6,18...}

sequência_numérica = {X_k | X_k1 = 2 e X_k = X_k - 1 * 3}
```
#### 2.6. Utilizando linguagem de programação defina:
- a) Uma enumeração para os meses do ano.
```ts
  
  enum meses_do_ano_mic {
    Janeiro=1, Fevereiro=2, Marco=3, Abril=4, Maio=5, Junho=6, Julho=7, Agosto=8, Setembro=9, Outubro=10, Novembro=11, Dezembro=12
}
```

- b) Uma enumeração para os dias da semana.
```ts
enum dias_da_semana_mic {
    Segunda=1,Terca=2,Quarta=3,Quinta=5,Sexta=6,Sabado=7,Domingo=8
}
```
- c) Uma função recursiva para o cálculo do fatorial de um número.
```ts
function fatorial_mic(numero: number): number {
    if (numero == 0) {
        return 1
    }
    else {
        return fatorial_mic(numero - 1) * numero
    }

}

console.log(fatorial_mic(6))

// Lógica por trás da recursão
/* fatorial 6
 fatorial 5 * 6
 (fatorial 4 * 5) * 6
 ((fatorial 3 * 4) * 5) * 6
 (((fatorial 2 * 3) * 4) * 5) * 6
 ((((fatorial 1 * 2) * 3) * 4) * 5) * 6
 (((((fatorial 0 * 1) * 2) * 3) * 4) * 5) * 6
 (((((1 * 1) * 2) * 3) * 4) * 5) * 6
 ((((1 * 2) * 3) * 4) * 5) * 6
 (((2 * 3) * 4) * 5) * 6
 ((6 * 4) * 5) * 6
 (24 * 5) * 6
 120 * 6
 720 */
```
- d) Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança.
```ts
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
```
#### 2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenadade longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações.

- Arquivo src/veiculo.ts
```ts
export default class Veiculo_mic {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    public mover_latitude(valor: number): void {
        this.latitude += valor;
    }
    public mover_longitude(valor: number): void {
        this.longitude += valor;
    }
}
```
- Arquivo src/carro_voador.ts
```ts
import Veiculo_mic from "./veiculo";

class Carro_Voador_mic extends Veiculo_mic {
    vertical: number = 0;
    horizontal: number = 0;


    constructor(longitude: number, latitude: number) {
        super(longitude, latitude);
    }

    public take_off(): void {
        if (this.horizontal > 0) {
            this.longitude += 25
            this.mover_longitude(10);
            this.mover_latitude(10);
        }
        else {
            this.vertical += 50;
        }
    }

    public mover_horizontal(): void {
        if (this.vertical > 0) {
            this.horizontal++;
            this.mover_latitude(15);
            this.mover_longitude(50);

        }
        else {
            console.log("Veículo encontra-se no solo, impossível mover-se horizontalmente");
        }
    }
}


const evetol = new Carro_Voador_mic(0, 0);
evetol.mover_horizontal(); // retorna erro pois veiculo está parado
console.log(evetol.latitude, evetol.longitude); // 0 0
evetol.take_off(); // decola
evetol.mover_horizontal();
console.log(evetol.latitude, evetol.longitude); // 15 50
```

#### 2.8. O que acontece ao se executar uma chamada a uma função recursiva que chama a si mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código que sejam equivalentes ao recursivo em termos de entradas e saídas mas que utilizem iteração ao invés de recursão. Qual sua conclusão?



#### 2.9. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo, é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração de seus primeiros 50 termos.

```ts
function progressao_geometrica_mic(valor: number, constante: number):void {
    for (let i = 0; i <= 50; i++) {
        console.log(valor)
        valor = valor * constante
    }
}

progressao_geometrica_mic(1, 3);
```

#### 2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um mesmo valor.

```ts
class Fibonacci_mic {
    fibo: number[] = [1, 1, 2];



    proximo_termo(termo_atual: number[]): number {
        return termo_atual[termo_atual.length - 1] + termo_atual[termo_atual.length - 2]
    }

    gerar_sequencia(termos: number): void {
        for (let i = 3; i < termos; i++) {
            this.fibo.push(this.proximo_termo(this.fibo));
        }
        console.log(this.fibo)

    }

    gerar_sequencia_recursiva(termos: number): void {
        if (this.fibo.length < termos) {
            this.fibo.push(this.proximo_termo(this.fibo));
            this.gerar_sequencia_recursiva(termos)
        }
        else {
            console.log(this.fibo);
        }
    }
}


new Fibonacci_mic().gerar_sequencia_recursiva(8)
new Fibonacci_mic().gerar_sequencia(8);
```
