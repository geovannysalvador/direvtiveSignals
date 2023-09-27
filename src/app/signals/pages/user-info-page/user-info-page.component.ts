import { Component, OnInit, inject, signal } from '@angular/core';
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
    .subscribe( user => {
      this.currentUser.set(user)
    } )
  }

}
