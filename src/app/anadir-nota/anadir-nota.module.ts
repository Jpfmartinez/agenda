import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirNotaPageRoutingModule } from './anadir-nota-routing.module';

import { AnadirNotaPage } from './anadir-nota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirNotaPageRoutingModule
  ],
  declarations: [AnadirNotaPage]
})
export class AnadirNotaPageModule {}
