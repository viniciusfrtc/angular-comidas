import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaEscolhidaComponent } from './comida-escolhida.component';

describe('ComidaEscolhidaComponent', () => {
  let component: ComidaEscolhidaComponent;
  let fixture: ComponentFixture<ComidaEscolhidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidaEscolhidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidaEscolhidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
