import { TimesService } from './../../../shared/services/times.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-times',
  templateUrl: './create-times.component.html',
  styleUrls: ['./create-times.component.scss'],
})
export class CreateTimesComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private timesService: TimesService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: [null],
      sigla: [null],
      uf: [null],
      estadio: [null],
    });
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.timesService
      .criarTimes(this.formulario.value)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }
}
