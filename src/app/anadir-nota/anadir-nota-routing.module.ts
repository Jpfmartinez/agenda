import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirNotaPage } from './anadir-nota.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirNotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirNotaPageRoutingModule {}
