import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {

  // una forma de injectarlo tradicional pero usaremos la de abajo
  // constructor ( private fb: FormBuilder ){}
  // Forma dos de injectar
  private fb = inject(FormBuilder)

  public color:string = 'green'

  // Formulario
  public myForm:FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  })

  changeColor(){
    const colorsList = ['#dda15e', '#e3d5ca', '#a7c957', '#83c5be', '#f5cac3', '#e7c6ff', '#f7af9d', '#fcca46', '#dbd3d8']; // Lista de colores comunes
    const color = colorsList[Math.floor(Math.random() * colorsList.length)];

    this.color = color;
  }

}
