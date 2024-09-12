import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Duenio } from '../Duenio';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [CommonModule, FormsModule, AppComponent],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {
  @Input() duenio = new Duenio;

  listaTiposA : string[] = ['Archivo', 'Foto', 'Doc'];

  tipoArchSel : string = " ";

  @Output() EnviadoEmit = new EventEmitter<Duenio>();
  
}
