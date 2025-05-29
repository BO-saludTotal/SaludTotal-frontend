import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInfoPacienteComponent } from './actualizar-info-paciente.component';

describe('ActualizarInfoPacienteComponent', () => {
  let component: ActualizarInfoPacienteComponent;
  let fixture: ComponentFixture<ActualizarInfoPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarInfoPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarInfoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
