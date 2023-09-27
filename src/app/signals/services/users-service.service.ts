import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {
  // Injection de dependencias sin usar el constructor
  constructor() { }
  // Otra forma
  private http = inject(HttpClient);

  private baseUrl = 'https://reqres.in/api/users';

  getUsetById(id: number):Observable<User>{
    // Peticion Http
    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
    .pipe(
      map( response => response.data ),
      tap( console.log )
    );

  }
}
