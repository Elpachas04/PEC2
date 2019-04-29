import { Component, OnInit } from '@angular/core';

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  private personaListDefaults: Array<Persona> = [
    { id: 0, nombre: 'Antony', apellido: 'Pachas'},
    { id: 1, nombre: 'Angelo', apellido: 'Vicente'},

  ];
  personaList: Array<Persona> = [];

  constructor() {
    for (const persona of this.personaListDefaults){
      this.addPersona(persona);
    }
  }
  // Add persona
  addPersona(persona: Persona) {
    this.personaList.push(persona);
  }

  editPersonaById(id:number) {
    console.log('Editara la persona con id:'+id);
  }

  removePersonaById(id:number) {
    console.log('Elimina persona con id:'+id);
    let i: number;
    for ( i = 0; i < this.personaList.length; i++) {
      if ( this.personaList[i].id === id ) this.personaList.splice(i,1);
    }
  }

  goDetail(id:number):void {
    console.log("Edit "+id);
  }

  onRemovePersona(id:number):void {
    console.log("Remove persona with id: "+id);
    this.removePersonaById(id);
  }
  ngOnInit() {
  }

}
