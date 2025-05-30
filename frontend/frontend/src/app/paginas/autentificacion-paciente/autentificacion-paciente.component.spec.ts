import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionPacienteComponent } from './autentificacion-paciente.component';

describe('AutentificacionPacienteComponent', () => {
  let component: AutentificacionPacienteComponent;
  let fixture: ComponentFixture<AutentificacionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutentificacionPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
