class Exercicio {
    static dia:string = "01";
    static mes:string = "12";
    static ano:string = "2023";
    constructor(){}

    data(){
        return `${Exercicio.dia}/${Exercicio.mes}/${Exercicio.ano}`
    }
   }

   console.log(new Exercicio().data());