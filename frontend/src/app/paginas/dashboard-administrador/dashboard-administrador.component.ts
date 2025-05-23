import { Component , ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-administrador',
  imports: [RouterModule],
  templateUrl: './dashboard-administrador.component.html',
  styleUrl: './dashboard-administrador.component.css'
})
export class DashboardAdministradorComponent {
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  triggerUpload() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      alert(`Archivo seleccionado: ${file.name}`);
    }
  }

}