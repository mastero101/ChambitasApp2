import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MtgPageRoutingModule } from './mtg-routing.module';

import { MtgPage } from './mtg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MtgPageRoutingModule
  ],
  declarations: [MtgPage]
})
export class MtgPageModule {}
