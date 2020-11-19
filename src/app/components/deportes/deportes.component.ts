import {Component} from "@angular/core";
@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html"
})

export class Deportes {

    public sports: Array<string>;

    constructor(){
        //Iniciamos variables con una serie de deportes 
        this.sports=["Petanca","Futbol","Surf","Tenis","Curling","Basket","Hockey"];

    }
}