import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';

  constructor(){}

    ngOnInit(): void {
      firebase.initializeApp({
        apiKey: "AIzaSyCS8aaE8_PD9CTgUBhmT-Jqit09syKPvO0",
        authDomain: "listado-personas-c3fc7.firebaseapp.com",
      })
    }

}
