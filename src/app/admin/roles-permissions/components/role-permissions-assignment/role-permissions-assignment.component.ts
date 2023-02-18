import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Permission } from '../../store/models/permission.model';

@Component({
  selector: 'app-role-permissions-assignment[permissions][assignedPermissions]',
  templateUrl: './role-permissions-assignment.component.html',
  styleUrls: ['./role-permissions-assignment.component.scss']
})
export class RolePermissionsAssignmentComponent implements OnInit {


  @Input() permissions: Permission[] = [];
  @Input() assignedPermissions: Permission[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Permission[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
