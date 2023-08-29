/* 2.7. Um veículo possui a capacidade de se mover, expressa pela alteração na sua coordenadade 
longitude e latitude. Um veículo elétrico é um veículo que possui como fonte de energia primária
a eletricidade (armazenada em uma bateria). Um veículo elétrico e voador é um veículo que também
possui a capacidade de se mover na vertical, expressa pela alteração de sua altitude em relação 
ao solo. Represente um veículo elétrico e voador utilizando uma cadeia de herança. Defina o 
código-fonte representativo do modelo em um arquivo separado daquele que faz uso desse e,
adicionalmente exemplifique o acesso e a modificação desses atributos através de chamada de
suas operações. */

export default class Veiculo {
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