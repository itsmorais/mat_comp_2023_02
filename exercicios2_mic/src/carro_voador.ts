import Veiculo from "./veiculo";

class Carro_Voador extends Veiculo {
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


const evetol = new Carro_Voador(0, 0);
evetol.mover_horizontal(); // retorna erro pois veiculo está parado
console.log(evetol.latitude, evetol.longitude); // 0 0
evetol.take_off(); // decola
evetol.mover_horizontal();
console.log(evetol.latitude, evetol.longitude); // 15 50