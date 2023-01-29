import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

import { getDatabase, ref, update, child, get, onValue } from 'firebase/database';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  imageUrls = [
    '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '',
  ]; // Este arreglo contiene las URLs de las imágenes (18x)
  hasMoreImages = true; // Esta bandera indica si hay más imágenes para cargar
  trabajo = {
             profesion: 'Service',
             };
  nombre: any;
  profesion: any;
  review: any;

  constructor() {
    this.nombre = this.getNombre();
    this.profesion = this.getProfesiones();
    this.review = 'Esta es una prueba de concepto para la pagina Perfil';
   }

  ngOnInit() {
  }

  getNombre() {
    const db = getDatabase();
    const starCountRef = ref(db, '/id/nombres/' + '/nombre');
      onValue(starCountRef, (snapshot) => {
    this.nombre = snapshot.val();
    });
  }

  getProfesiones() {
    const db = getDatabase();
    const work = ref(db, '/id/profesiones/' + '/profesion');
      onValue(work, (snapshot) => {
    this.profesion = snapshot.val();
    });
  }

  reload() {
    window.location.reload();
  }

}
