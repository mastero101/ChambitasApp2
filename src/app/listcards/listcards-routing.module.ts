import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcardsPage } from './listcards.page';

const routes: Routes = [
  {
    path: '',
    component: ListcardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcardsPageRoutingModule {}
