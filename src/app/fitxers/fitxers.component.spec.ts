import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitxersComponent } from './fitxers.component';

describe('FitxersComponent', () => {
  let component: FitxersComponent;
  let fixture: ComponentFixture<FitxersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitxersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitxersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
