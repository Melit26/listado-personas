import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../../personas.service';
import { LoggingService} from '../../LoggingService.service';
import { logging } from 'protractor';
import { Component, OnInit, EventEmitter, ElementRef, Output} from '@angular/core';
import { Persona } from '../../persona.model';
import { getHeapSnapshot } from 'v8';
import { timeStamp } from 'console';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})

export class FormularioComponent implements OnInit {

    nombreInput:string = '';
    apellidoInput:string = '';
    index: number;

  constructor(private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    if(this.index){
      let persona: Persona = this.personasService.encontrarPersona(this.index)
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  guardarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    if(this.index){
      this.personasService.modificarPersona(this.index, persona1)
    }else{
      this.personasService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }
}
