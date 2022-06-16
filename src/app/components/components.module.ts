import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    
    HeaderComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ]

})
export class ComponentsModule { }
