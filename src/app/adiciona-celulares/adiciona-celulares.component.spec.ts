import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaCelularesComponent } from './adiciona-celulares.component';

describe('AdicionaCelularesComponent', () => {
  let component: AdicionaCelularesComponent;
  let fixture: ComponentFixture<AdicionaCelularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaCelularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaCelularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
