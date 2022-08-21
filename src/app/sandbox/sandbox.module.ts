import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { ArrayComponent } from './array/array.component';
import { SandBoxRoutingModule } from './sandbox-routing.module';
import { SandboxSubformAComponent } from './sandbox-subform-a/sandbox-subform-a.component';
import { SandboxComponent } from './sandbox.component';
import { sandboxReducer } from './state/sandbox.reducer';


@NgModule({
  declarations: [
    SandboxComponent,
    SandboxSubformAComponent,
    ArrayComponent,
  ],
  imports: [
    SandBoxRoutingModule,
    SharedModule,
    StoreModule.forFeature('sandbox', sandboxReducer)
  ]
})
export class SandboxModule { }
