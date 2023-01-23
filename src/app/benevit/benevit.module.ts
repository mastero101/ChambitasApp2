import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenevitPageRoutingModule } from './benevit-routing.module';

import { BenevitPage } from './benevit.page';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenevitPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [BenevitPage]
})
export class BenevitPageModule {}
