import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-sumarnumeros',
  templateUrl: './sumarnumeros.component.html',
  styleUrls: ['./sumarnumeros.component.css']
})
export class SumarnumerosComponent implements OnInit {

  public suma: number; 
  @ViewChild("cajanumero1") cajanumero1: ElementRef;
  @ViewChild ("cajanumero2") cajanumero2: ElementRef;

  sumarNumeros(){
    var num1=parseInt(this.cajanumero1.nativeElement.value);
    var num2=parseInt(this.cajanumero2.nativeElement.value);
    this.suma = num1 + num2; 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
