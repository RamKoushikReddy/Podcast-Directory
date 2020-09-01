import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormBuilder,
    FormGroup,
  Validators]
})
export class AppRoutingModule { }
