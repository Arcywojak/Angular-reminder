import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {UpperCasePipe} from './pipes/upper-case.pipe';


@NgModule({
  declarations: [
    UpperCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
      UpperCasePipe
  ]
})
export class SharedModule { }
