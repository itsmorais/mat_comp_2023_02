# 2. DEFINIÇÕES MATEMÁTICAS
#### 2.1. Efetue uma definição, através de enumeração, de todos os membros da sua família, considerando apenas parentesco direto de pais, irmãos e filhos.
```
Enumeração membros_da_familia:
  pais = Marco,Andreia
  irmaos = Auane
  filhos = ''
Fim-enumeração

ou

membros_da_familia = Marco,Andreia,Auane
```
#### 2.2. Efetue uma definição, através de enumeração, de cursos existentes na instituição de ensino em que você está estudando.
```
cursos = Desenvolvimento de software multiplataforma, geoprocessamento
```
#### 2.3. Efetue uma definição, através de enumeração, de números primos. Um número é dito primo se só possui como divisor ele mesmo e o número um.
```
numeros_primos = 1,3,5,7,...
```
#### 2.4. Efetue uma definição ostensiva, de um colega de classe.
#### 2.5. Efetue uma definição recursiva de uma sequência numérica cujos elementos são obtidos multiplicando-se, a partir do segundo elemento, o elemento anterior por 3. Considere que o primeiro elemento vale 2.
```
Primeiro termo da sequência numérica = 2
Termos da sequência numérica = Xk, com Xk expresso pela fórmula Xk = (Xk -1) * 3

Sequência numérica = {2,6,18...}

sequência_numérica = {Xk | X1 = 2 e Xk = Xk-1 * 3}
```
#### 2.6. Utilizando linguagem de programação defina:
- a) Uma enumeração para os meses do ano.
```ts
  
  enum meses_do_ano {
    Janeiro, Fevereiro, Marco, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro
}
```

- b) Uma enumeração para os dias da semana.
```ts
enum dias_da_semana {
    Segunda,Terca,Quarta,Quinta,Sexta
}
```
- c) Uma função recursiva para o cálculo do fatorial de um número.
```ts
function fatorial(numero: number): number {
    if (numero == 0) {
        return 1
    }
    else {
        return fatorial(numero - 1) * numero
    }

}
```
- d) Uma definição que corresponda a definição do tipo gênero-diferença para um uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança.
#### 2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenadade longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia primária a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e, adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de suas operações.
#### 2.8. O que acontece ao se executar uma chamada a uma função recursiva que chama a si mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código que sejam equivalentes ao recursivo em termos de entradas e saídas mas que utilizem iteração ao invés de recursão. Qual sua conclusão?
#### 2.9. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo, é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração de seus primeiros 50 termos.
#### 2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um mesmo valor.
