import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-in-cart-modal',
  templateUrl: './add-in-cart-modal.component.html',
  styleUrls: ['./add-in-cart-modal.component.scss']
})
export class AddInCartModalComponent implements OnInit {

  form : FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddInCartModalComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      quantity: [1],
      unit: [''],
    });
  }

  onNoClick(){
    this.dialogRef.close();
  }
}
