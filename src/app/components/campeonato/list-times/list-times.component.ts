import { Component, OnInit } from '@angular/core';
import { TimesService } from 'src/app/shared/services/times.service';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.scss'],
})
export class ListTimesComponent implements OnInit {
  displayedColumns: string[] = [
    'demo-position',
    'demo-nome',
    'demo-sigla',
    'demo-uf',
    'demo-estadio',
  ];
  times: any[] = [];

  constructor(private timesService: TimesService) {}

  ngOnInit(): void {
    this.listarTimes();
  }

  listarTimes() {
    this.timesService.listarTimes().subscribe((times) => {
      this.times = times;
    });
  }
}
