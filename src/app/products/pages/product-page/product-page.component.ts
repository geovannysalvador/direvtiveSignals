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
    const colorsList = ['#fca311', '#fb5607', '#ff99c8', '#78290f', '#d90429', '#277da1', '#333d29', '#233d4d', '#3c096c']; // Lista de colores comunes
    const color = colorsList[Math.floor(Math.random() * colorsList.length)];

    this.color = color;
  }

}
