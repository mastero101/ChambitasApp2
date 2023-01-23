import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchscreenPageRoutingModule } from './launchscreen-routing.module';

import { LaunchscreenPage } from './launchscreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchscreenPageRoutingModule
  ],
  declarations: [LaunchscreenPage]
})
export class LaunchscreenPageModule {}
