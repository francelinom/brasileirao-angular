import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampeonatoRoutingModule } from './campeonato-routing.module';
import { ListTimesComponent } from './list-times/list-times.component';
import { CreateTimesComponent } from './create-times/create-times.component';
import { CampeonatoComponent } from './campeonato.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ListTimesComponent, CreateTimesComponent, CampeonatoComponent],
  imports: [
    CommonModule,
    CampeonatoRoutingModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [CampeonatoComponent],
})
export class CampeonatoModule {}
