import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';



@NgModule({
  declarations: [Mod1Component],
  imports: [
    CommonModule
  ],
  exports: [Mod1Component]
})
export class Mod1Module { }
