import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit  {

  private htmlElement?:ElementRef<HTMLElement>
  private _color:string = 'red';

  // para resibir el color
  @Input()
  set color( value:string ){
    this._color = value
    this.setColorStyle();

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

}
