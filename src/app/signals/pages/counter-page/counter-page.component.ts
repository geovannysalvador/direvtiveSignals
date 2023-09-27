import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  // Signal de solo lectura no se puede manipular
  public counterSquared = computed( ()=> this.counter() * this.counter() );

  // Para el boton +1 y -1
  increaseBy(value:number){
    
    // forma uno de hcerlo
    // this.counter.set(this.counter() + value )

    // Forma dos
    this.counter.update( current => current + value);
  }
}
