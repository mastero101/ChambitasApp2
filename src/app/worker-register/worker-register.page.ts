import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getDatabase, ref, update, child, get, onValue } from 'firebase/database';

@Component({
  selector: 'app-worker-register',
  templateUrl: './worker-register.page.html',
  styleUrls: ['./worker-register.page.scss'],
})
export class WorkerRegisterPage implements OnInit {
  id: any;

  constructor() { }

  ngOnInit() {
    this.id = this.getDatabase();
  }

  getDatabase() {
    const db = getDatabase();
    const starCountRef = ref(db, '/id/id' + '/');
      onValue(starCountRef, (snapshot) => {
    this.id = snapshot.val();
      console.log(this.id);
      this.id = Number(this.id);
    });
  }

  submit() {
    const id = (document.getElementById('0') as HTMLInputElement).value;
    const nombre = (document.getElementById('1') as HTMLInputElement).value;
    const profesion = (document.getElementById('2') as HTMLInputElement).value;
    const cargo = (document.getElementById('3') as HTMLInputElement).value;
    const db = getDatabase();
      update(ref(db, '/id' + '/' ), {
        id
      });
      update(ref(db, '/id/nombres/' ), {
        nombre
      });
      update(ref(db, '/id/profesiones/' ), {
        profesion
      });
      update(ref(db, '/id/cargos/' ), {
        cargo
      });
    console.log(nombre,profesion,cargo);
  }
}
