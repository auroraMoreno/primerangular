import {Component} from '@angular/core';

@Component({
    selector:'app-formulario-persona',
    templateUrl:'./formulariopersona.component.html'
})
export class FormularioPersona{
    //declaramos un obj como modelo que deseemos enlazar con el form
    public user: any; 
    public mensaje: string;
    constructor(){
        //Iniciamos el objeto user (model)
        this.user ={
            nombre: "",
            apellidos:"",
            edad:0
        }
        this.mensaje ="";
    }
    recibirDatos(){
        this.mensaje="Datos recibidos";
        console.log(this.user);
    }
}