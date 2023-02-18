import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { Role } from 'src/app/admin/roles-permissions/store/models/role.model';
import { User } from 'src/app/store/models/user.model';

type ModalData = {
  user: User;
  roles: Role[];
};

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  public form: FormGroup;
  public user: User;
  public roles: Role[];
  public status = ['active', 'inactive', 'deleted'];
  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private dialogRef: DialogRef<UsersFormComponent>,
    private _fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.user = this.data.user;
    this.roles = this.data.roles;

    this.form = this._fb.group({
      first_name: [this.user.first_name],
      last_name: [this.user.last_name],
      email: [this.user.email],
      location: [this.user.location],
      role: [this.user.role],
      status: [this.user.status],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log('value :>> ', value);
    });
  }
}
