import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pantallafindejuego } from './pantallafindejuego';

describe('Pantallafindejuego', () => {
  let component: Pantallafindejuego;
  let fixture: ComponentFixture<Pantallafindejuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pantallafindejuego],
    }).compileComponents();

    fixture = TestBed.createComponent(Pantallafindejuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
