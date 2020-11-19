import {Component} from "@angular/core";

@Component({
    selector:"app-positivo-negativo",
    templateUrl:"./positivonegativo.component.html"
})

export class PositivoNegativo {
    public numerosEnteros: Array<number>;

    constructor(){
        this.numerosEnteros = [(-7),(-9),3];
    }

    generarRandom(){
        let aleat =  Math.floor(Math.random() * 100 + (-30));
        this.numerosEnteros.push(aleat);
    }

}