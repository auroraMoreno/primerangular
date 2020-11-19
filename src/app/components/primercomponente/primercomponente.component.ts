import {Component} from '@angular/core';

//declaracion del comp y su estructura de archvos además de su nombre

@Component({
    //Nombre del comp para el app
    selector: "app-primercomponente",
    //plantilla html para el comp
    templateUrl:"./primercomponente.component.html"
})

//esto es para la declaracion en module
export class PrimerComponente{

    //Declaramos var para la clase, van con tipo
    public nombre: string;
    public anyo: number;

    //La primera vez que entra en el componente tenemos un constructor: 
    constructor (){
        console.log("Creando el primer componente");
        //con this accedemos a las propiedades: 
        this.nombre ="Aurora";
        this.anyo=2020
    }



}