import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { FormioModule } from 'angular-formio';

@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    FormioModule
  ]
})
export class DynamicFormModule { }
