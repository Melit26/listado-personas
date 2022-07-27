import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../persona.service';
import { Persona } from '../persona.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

    ngOnInit(): void {
      this.personasService.obtenerPersonas()
      .subscribe(
        (personas:Persona[]) => {
          this.personas = personas;
          this.personasService.setPersonas(personas);
          console.log("obtener personas suscriber:" + this.personas);
        }
      );
    }

  irAgregar(){
    console.log("nos vamos a agregar");
    this.router.navigate(['./personas/agregar'],{queryParams:{modoEdicion:0}});
  }
}
