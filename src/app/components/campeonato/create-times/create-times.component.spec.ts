import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTimesComponent } from './create-times.component';

describe('CreateTimesComponent', () => {
  let component: CreateTimesComponent;
  let fixture: ComponentFixture<CreateTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
