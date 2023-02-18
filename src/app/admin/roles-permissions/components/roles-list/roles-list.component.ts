import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../../store/models/role.model';

import { Permission } from '../../store/models/permission.model';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class RolesListComponent implements OnInit {

  public Array = Array;

  roles : Role[] = [];
  expandedElement: Role | null;
  permissions : Permission[] = [];
  filterControl : FormControl;
  displayedColumns = ['expand','name','icon','description', 'ip_access', 'enforce_tfa','admin_access', 'app_access','actions'];

  constructor(private _ar : ActivatedRoute) { }

  ngOnInit(): void {
    this.roles = this._ar.snapshot.data.roles;
    this.permissions = this._ar.snapshot.data.permissions;
  }
  
  onFilterValueChanged(event){
    throw new Error('Not implemented yet');
  }

  addUser(){
    throw new Error('Not implemented yet');
  }

  viewUserDetails(user : Role){
    throw new Error('Not implemented yet');
  }

  updateUser(user : Role){
    throw new Error('Not implemented yet');
  }

}
