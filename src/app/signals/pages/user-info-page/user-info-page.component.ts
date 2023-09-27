import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { UsersServiceService } from '../../services/users-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UsersServiceService);
  // mandar directamente el usuario 1 por defecto
  public userId = signal(1);

  public currentUser = signal<User|undefined>(undefined);
  public userFound = signal(true);

  // Para tener el nombre y apellido
  public fullName = computed<string>( ()=>{
    if(!this.currentUser()) return 'User no encontrado'
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  })

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

  loadUser(id:number){
    if (id <= 0) return;
    this.userId.set(id);
    //quitar la info para que sea mas eficiente
    this.currentUser.set(undefined);
    //aca termina

    // Peticion http dependiendo del id
    this.userService.getUsetById(id)
    .subscribe({
      next:(user) => {
        // si lo encuentra. es lo mismo que el codigo anterior solo se implemento el next
        this.currentUser.set(user);
        this.userFound.set(true);
      },
      // Si no lo encuentra lo cambia
      error: () => {
        this.userFound.set(false);
        // Para limpiar la informacion del usuario porque no esta
        this.currentUser.set(undefined)
      },
    });
  }

}
