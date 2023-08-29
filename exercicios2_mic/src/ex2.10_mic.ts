/* 2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, 
ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a 
orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o 
cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas
a um mesmo valor. */


class Fibonacci {
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


new Fibonacci().gerar_sequencia_recursiva(8)
new Fibonacci().gerar_sequencia(8);