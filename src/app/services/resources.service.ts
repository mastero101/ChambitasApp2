import { Injectable } from '@angular/core';
import { getDatabase, ref, update, child, get, onValue } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  nombre: any;

constructor() { }

  getNombre() {
    const db = getDatabase();
    const starCountRef = ref(db, '/id/nombres/' + '/nombre');
      onValue(starCountRef, (snapshot) => {
    this.nombre = snapshot.val();
    });
  }
}
