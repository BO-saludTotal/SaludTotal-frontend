import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesCitasMedicasComponent } from './pacientes-citas-medicas.component';

describe('PacientesCitasMedicasComponent', () => {
  let component: PacientesCitasMedicasComponent;
  let fixture: ComponentFixture<PacientesCitasMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesCitasMedicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesCitasMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
