import { User } from './../../interfaces/user-request.interface';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  })

  public fullName = computed( ()=> `${this.user().first_name} ${this.user().last_name}`)

  // Usar keyof y User(es la interfaz) para indicar que solo se usaran atributos de la misma
  onFieldUpdates(field:keyof User, value:string){
    // console.log({field, value});

    // Tres formas de actualizar la señal

    //! primera forma
    // Recivir cambios del field. olvida el valor anterior y establece uno nuevo
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    //! segunda forma
    // cuando se modifica el objeto dispara la actualizacion de la señal
    this.user.mutate(current => {
      switch(field){

        case 'email':
          current.email = value;
        break;

        case 'first_name':
          current.first_name = value;
        break;

        case 'last_name':
          current.last_name = value;
        break;

        case 'id':
          current.id = Number(value);
        break;
      }
    })

    //! tercera forma
    //El valor que retorne sera el nuevo valor de la señal
    this.user.update(current =>{
      return{
        ...current,
        [field]: value
      }
    })

  }
}
