import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkerRegisterPage } from './worker-register.page';

const routes: Routes = [
  {
    path: '',
    component: WorkerRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkerRegisterPageRoutingModule {}
