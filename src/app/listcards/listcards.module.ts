import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcardsPageRoutingModule } from './listcards-routing.module';

import { ListcardsPage } from './listcards.page';

import { BenevitPageModule } from '../benevit/benevit.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcardsPageRoutingModule,
    BenevitPageModule,
  ],
  declarations: [ListcardsPage]
})
export class ListcardsPageModule {}
