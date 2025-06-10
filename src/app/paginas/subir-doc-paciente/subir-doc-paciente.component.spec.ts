import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirDocPacienteComponent } from './subir-doc-paciente.component';

describe('SubirDocPacienteComponent', () => {
  let component: SubirDocPacienteComponent;
  let fixture: ComponentFixture<SubirDocPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirDocPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirDocPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
