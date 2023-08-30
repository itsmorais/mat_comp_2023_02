function sequence(n: number): number {
    if (n == 1) {
        return 1;
    } else {
        return 2 * sequence(n - 1);
    }
}
console.log(sequence(10));



function sequencia_iteracao_mic(n: number): number {
    let contador = 1;
    for (let i = 1; i < n; i++) {
        contador *= 2

    }
    return contador;



}

console.log(sequencia_iteracao_mic(10))/* 
Uma função recursiva chama a si mesma várias vezes, consumindo espaço de memória. Se a quantidade de chamadas for muito grande,
isso pode levar ao “Stack Overflow”, que é quando não há espaço o suficiente para se processar a chamada, causando mal
funcionamento do programa.

Conclui-se portanto, que por vezes é melhor usar algoritmos iterativos, principalmente em casos onde há a possibilidade de 
muitas chamadas, de forma a evitar esse tipo de problema. */