import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent {

  tab = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: null},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'Far'},
  {position: 6, name: 'Carbon', weight: null, symbol: 'C'},
  {position: 7, name: null, weight: 14.0067, symbol: 'N'},
  {position: null, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}];


  public form : FormGroup = this._fb.group({
    subA:[ null],
    subB: [ null],
    array: [this.tab, Validators.required]
  })

  disableArray(value : any) {
    if(value.checked){
      this.form.get('array').disable()
    }else {
      this.form.get('array').enable()
    }
  }


  constructor(private _fb : FormBuilder) { }
    
  send(){
    console.log(this.form.value);
    console.log(this.form.valid);
  }

}
