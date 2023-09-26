import { Directive } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective  {

  constructor() {
    console.log('constructor de directiva');

   }

}
