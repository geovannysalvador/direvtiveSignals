import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit  {

  private htmlElement?:ElementRef<HTMLElement>
  private _color:string = 'red';
  private _errors?:ValidationErrors | null;

  // para resibir el color
  @Input()
  set color( value:string ){
    this._color = value
    this.setColorStyle();
  }

  @Input()
  set errors( value:ValidationErrors | null | undefined ){
    this._errors = value;
    // console.log(value);

    this.setErrorMessege();

  }

  constructor( private el:ElementRef<HTMLElement> ) {
    // console.log('constructor de directiva');
    // console.log(el);
    this.htmlElement = el;

   }

  ngOnInit(): void {
    // console.log('Directiva -NGOnInit');
    this.setColorStyle();

  }

  // para cambiar el color
  setColorStyle():void{
    if( !this.htmlElement) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  }

  // enviar error
  setErrorMessege():void{
    if( !this.htmlElement) return;
    if( !this._errors) {
      this.htmlElement.nativeElement.innerText = "No hay errores";
      return;
    }

    // carpinteria de posibles errores. Me muestar el nombre del error por el key
    const errors = Object.keys(this._errors);
    // Para ver los errores que tengo
    console.log(errors);


    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerText = "Campo Requerido.";
      return;
    }

    if(errors.includes('minlength')){
      const actual = this._errors!['minlength']['actualLength'];
      const requerido = this._errors!['minlength']['requiredLength'];

      this.htmlElement.nativeElement.innerText = `Minimo de caracteres ${actual}/${requerido}`;
      return;
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerText = "Debe ser un correo.";
      return;
    }

  }


}
