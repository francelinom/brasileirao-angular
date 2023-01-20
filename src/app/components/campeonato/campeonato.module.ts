import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampeonatoRoutingModule } from './campeonato-routing.module';
import { ListTimesComponent } from './list-times/list-times.component';
import { CreateTimesComponent } from './create-times/create-times.component';
import { CampeonatoComponent } from './campeonato.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListTimesComponent, CreateTimesComponent, CampeonatoComponent],
  imports: [
    CommonModule,
    CampeonatoRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
  ],
  exports: [CampeonatoComponent],
})
export class CampeonatoModule {}
