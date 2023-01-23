import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchscreenPage } from './launchscreen.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchscreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchscreenPageRoutingModule {}
