/* 2.9. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo,
é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação
que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração
de seus primeiros 50 termos. */


function progressao_geometrica(valor: number, constante: number):void {
    for (let i = 0; i <= 50; i++) {
        console.log(valor)
        valor = valor * constante
    }
}

progressao_geometrica(1, 3);