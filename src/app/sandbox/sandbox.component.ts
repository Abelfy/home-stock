import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pairwise, Subscription } from 'rxjs';
import { Column, FormControlType, FormCustomEvent } from './types/types.def';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss'],
})
export class SandboxComponent implements OnInit, OnDestroy {
  tab = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: null, symbol: 'C' },
    { position: 7, name: null, weight: 14.0067, symbol: 'N' },
    { position: null, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  public form: FormGroup = this._fb.group({
    subA: [null,Validators.required],
    array: [this.tab,Validators.required],
  });

  cols: Column[] = [
    {
      name : 'position',
      label : 'Position',
      type : FormControlType.NUMBER,
      isDisabled : false,
      validators: [Validators.required],
    },
    {
      name : 'name',
      label : 'Name',
      type : FormControlType.TEXT,
      isDisabled : false,
      validators: [Validators.required],
    },
    {
      name : 'weight',
      label : 'Weight',
      type : FormControlType.NUMBER,
      isDisabled : false,
      validators: [Validators.required],
    },
    {
      name : 'symbol',
      label : 'Symbol',
      type : FormControlType.SELECT,
      isDisabled : false,
      validators: [Validators.required],
      options : [
        { value : 'H', label : 'H' },
        { value : 'He', label : 'He' },
        { value : 'Li', label : 'Li' },
        { value : 'Be', label : 'Be' },
        { value : 'B', label : 'B' },
        { value : 'C', label : 'C' },
        { value : 'N', label : 'N' },
        { value : 'O', label : 'O' },
        { value : 'F', label : 'F' },
        { value : 'Ne', label : 'Ne' },
      ]
    }
  ]

  formCustomEvent: FormCustomEvent;
  previousData: any;
  formSub: Subscription;

  disableArray(value: any) {
    if (value.checked) {
      this.form.get('array').disable();
    } else {
      this.form.get('array').enable();
    }
  }

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSub = this.form.valueChanges
      .pipe(pairwise())
      .subscribe(([prev, next]: [any, any]) => {
        {
          if (prev.subA?.date && prev.subA?.date !== next.subA?.date) {
            this.formCustomEvent = {
              event: 'date',
              data: next.subA.date,
            };
          }
          
        }
      });
  }

  send() {}

  ngOnDestroy(): void {
    this.formSub.unsubscribe();
  }
}
