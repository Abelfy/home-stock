import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../../../../store/models/user.model';
import { UsersFormComponent } from '../modals/users-form/users-form.component';
import { RolesSelectors } from '../../../roles-permissions/store/roles';
import { Role } from '../../../roles-permissions/store/models/role.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users : User[] = [];
  public roles$ = this.store.select(RolesSelectors.selectAllRoles);
  filterControl : FormControl;
  displayedColumns = ['status','first_name','last_name', 'email', 'location','role', 'actions'];

  constructor(private _dialog : MatDialog,private _ar : ActivatedRoute,private store : Store) { }

  ngOnInit(): void {
    this.users = this._ar.snapshot.data.users;
  }
  onFilterValueChanged(event){
    throw new Error('Not implemented yet');
  }
  addUser(){
    throw new Error('Not implemented yet');
  }

  viewUserDetails(user : User){
    throw new Error('Not implemented yet');
  }

  updateUser(user : User,roles : Role[]){
    let dialogRef = this._dialog.open(UsersFormComponent, {
        data : {user,roles},
        enterAnimationDuration:'350ms',
        exitAnimationDuration: '250ms'
    });
    dialogRef.afterClosed().subscribe(result => {
        //this._router.navigate(['../'],{relativeTo:this._ar});
      });
  }
}
