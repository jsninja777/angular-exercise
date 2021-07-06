import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
