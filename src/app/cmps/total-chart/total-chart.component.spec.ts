import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalChartComponent } from './total-chart.component';

describe('TotalChartComponent', () => {
  let component: TotalChartComponent;
  let fixture: ComponentFixture<TotalChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
