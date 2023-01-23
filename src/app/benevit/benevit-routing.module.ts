import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BenevitPage } from './benevit.page';

const routes: Routes = [
  {
    path: '',
    component: BenevitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BenevitPageRoutingModule {}
