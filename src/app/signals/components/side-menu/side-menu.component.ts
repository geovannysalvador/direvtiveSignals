import { Component } from '@angular/core';

interface MenuItem{
  title:string;
  route:string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  public menuItems:MenuItem[] = [
    {title: 'Contador', route: 'counter'},
    {title: 'Mutaciones', route: 'properties'},
    {title: 'Usuario', route: 'user-info'},
  ]

}
