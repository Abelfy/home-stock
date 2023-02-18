import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
})
export class ErrorModalComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Error,
    private dialogRef: DialogRef<ErrorModalComponent>
  ) {}

  public env = environment;
  close(){
    this.dialogRef.close();
  }
}
