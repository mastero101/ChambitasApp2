import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkerRegisterPageRoutingModule } from './worker-register-routing.module';

import { WorkerRegisterPage } from './worker-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkerRegisterPageRoutingModule
  ],
  declarations: [WorkerRegisterPage]
})
export class WorkerRegisterPageModule {}
