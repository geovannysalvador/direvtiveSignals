import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit  {

  private htmlElement?:ElementRef<HTMLElement>

  constructor( private el:ElementRef<HTMLElement> ) {
    // console.log('constructor de directiva');
    console.log(el);
    this.htmlElement = el;

    // manda el valor de hola muno al span del html
    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo'
   }

  ngOnInit(): void {
    console.log('Directiva -NGOnInit');

  }

}
