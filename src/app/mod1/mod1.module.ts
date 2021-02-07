import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { PhonePipe } from './phone.pipe';
import { provideRoutes } from '@angular/router';

@NgModule({
  declarations: [Mod1Component, PhonePipe],
  imports: [CommonModule],
  exports: [Mod1Component],
  providers: [PhonePipe],
})
export class Mod1Module {}
