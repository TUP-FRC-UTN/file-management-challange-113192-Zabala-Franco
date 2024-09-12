import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { Duenio } from './Duenio';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnChanges {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  duenio: Duenio = new Duenio();
  
  listaTiposA : string[] = ['Archivo', 'Foto', 'Doc'];

  lstDuenios : Duenio[] = [];

  constructor() {
  }
  // constructor() {
  //   // Esto se ejecuta cuando el componente es instanciado
  //   console.log(this.listaTiposA);

  //   // Asignar un valor al nombre del dueño
  //  this.duenio.nombre = 'Juan Pérez';

  //  // Agregar el dueño a la lista
  //  this.lstDuenios.push(this.duenio);
  // }
  ngOnChanges(changes: SimpleChanges): void {
    // Puedes implementar lógica aquí en el futuro si es necesario
}

}
