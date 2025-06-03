import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteHistorialMedicoComponent } from './paciente-historial-medico.component';

describe('PacienteHistorialMedicoComponent', () => {
  let component: PacienteHistorialMedicoComponent;
  let fixture: ComponentFixture<PacienteHistorialMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteHistorialMedicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteHistorialMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
