import {Component, OnInit,DoCheck} from "@angular/core";
//import { threadId } from 'worker_threads';

@Component({
    selector:"app-ciclos-vida",
    templateUrl:"./ciclosvida.component.html"
})
export class CiclosVida implements OnInit,DoCheck{
    public mensaje: string; 

    //creamos uun metodo de accion para llamarlo con un boton 
    cambiarMensaje(){
        this.mensaje ="Y mañana miércoles...";
    }

    constructor(){
        console.log("Constructor, voy primer");
        this.mensaje = "Hoy es martes";
    }
    ngOnInit(): void{
        console.log("Ejecutando metod onInit");
    }
    ngDoCheck(){
        console.log("Estoy en doCheck");
    }
}
