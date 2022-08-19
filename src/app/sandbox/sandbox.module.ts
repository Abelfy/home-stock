import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SandboxComponent } from './sandbox.component';
import { SandboxSubformAComponent } from './sandbox-subform-a/sandbox-subform-a.component';
import { SandboxSubformBComponent } from './sandbox-subform-b/sandbox-subform-b.component';
import { SharedModule } from '../shared/shared.module';
import { SandBoxRoutingModule } from './sandbox-routing.module';
import { ArrayComponent } from './array/array.component';


@NgModule({
  declarations: [
    SandboxComponent,
    SandboxSubformAComponent,
    SandboxSubformBComponent,
    ArrayComponent,
  ],
  imports: [
    CommonModule,
    SandBoxRoutingModule,
    SharedModule
  ]
})
export class SandboxModule { }
