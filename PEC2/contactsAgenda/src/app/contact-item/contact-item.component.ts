import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  @Input() persona: Persona;
  @Output() clickDatos: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickEliminar: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }


  clickGoDetailHandler() {
   //irá a la ventana de detalles
    console.log("Has click para ver detalle")
    this.clickDatos.emit(this.persona.id);

  }
//activará el eliminar
  clickEliminarHandler() {
    this.clickEliminar.emit(this.persona.id);
  }

  ngOnInit() {
  }

}

