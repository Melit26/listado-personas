import { PersonasService } from './persona.service';
import { LoggingService } from './LoggingService.service';
import { Component, enableProdMode, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Listado de Personas';

}
