import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtgPage } from './mtg.page';

const routes: Routes = [
  {
    path: '',
    component: MtgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MtgPageRoutingModule {}
