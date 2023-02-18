import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  links = [{
    label: 'Utilisateurs',
    path: 'users',
    isActive : true
  },{
    label: 'Roles & Permissions',
    path: 'roles-permissions',
    isActive : false
  },
  {
    label: 'Statistiques',
    path: 'stats',
    isActive : false,
    isDisabled : true
  }];
  activeLink = this.links.find(link => link.isActive);
  background: ThemePalette = undefined;

  constructor() { }

  ngOnInit(): void {

  }

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  changeActiveLink(link : any){
    this.links.forEach(linkInList => {
      if(linkInList.path === link.path){
        linkInList.isActive = true
      }
      else{
        link.isActive = false
      }
    });
  }
}
