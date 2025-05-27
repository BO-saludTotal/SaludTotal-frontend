import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarContraPacienteComponent } from './cambiar-contra-paciente.component';

describe('CambiarContraPacienteComponent', () => {
  let component: CambiarContraPacienteComponent;
  let fixture: ComponentFixture<CambiarContraPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambiarContraPacienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CambiarContraPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
