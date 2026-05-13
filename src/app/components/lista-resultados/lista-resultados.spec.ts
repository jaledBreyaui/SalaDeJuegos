import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaResultados } from './lista-resultados';

describe('ListaResultados', () => {
  let component: ListaResultados;
  let fixture: ComponentFixture<ListaResultados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaResultados],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaResultados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
