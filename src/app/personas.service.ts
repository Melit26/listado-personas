import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PersonasService{
    personas: Persona[] = [
      new Persona('Juan','Perez'),
      new Persona('Laura','Juarez'),
      new Persona('Karla','Lara')
    ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService){}

  agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos persona: " + persona.nombre)
    this.personas.push(persona);
  }

    encontrarPersona (index: number){
        let persona: Persona =this.personas[index];
        return persona;
    }

    modificarPersona(index:number, persona:Persona){
      let persona1 = this.personas[index];
      persona1.nombre = persona.nombre;
      persona1.apellido = persona.apellido;
    }
}