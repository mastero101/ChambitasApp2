import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getDatabase, ref, update, child, get, onValue } from 'firebase/database';

@Component({
  selector: 'app-listcards',
  templateUrl: './listcards.page.html',
  styleUrls: ['./listcards.page.scss'],
})
export class ListcardsPage implements OnInit {
  imageUrls = [
    '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '',
  ]; // Este arreglo contiene las URLs de las imágenes (18x)
  hasMoreImages = true; // Esta bandera indica si hay más imágenes para cargar
  trabajo = {
             profesion: 'Service',
             };
  rate: any;
  rate2: any;
  rate3: any;
  rate4: any;
  rate5: any;
  rate6: any;
  review: any;
  review2: any;
  review3: any;
  review4: any;
  review5: any;
  review6: any;
  nombre: any;
  profesion: any;

  constructor(private http: HttpClient) {
    this.nombre = this.getNombre();
    this.profesion = this.getProfesiones();
    this.rate = localStorage.getItem('rate');
    this.rate2 = localStorage.getItem('rate2');
    this.rate3 = localStorage.getItem('rate3');
    this.rate4 = localStorage.getItem('rate4');
    this.rate5 = localStorage.getItem('rate5');
    this.rate6 = localStorage.getItem('rate6');
  } // Inyecta una instancia de HttpClient para hacer solicitudes HTTP

  ngOnInit() {
    this.imageUrls.forEach((imageUrl, index) => {
        this.getImage(imageUrl, index); // Para cada URL de imagen, llama a la función getImage
    });
    this.rate = +localStorage.getItem('rate');
    this.rate2 = +localStorage.getItem('rate2');
    this.rate3 = +localStorage.getItem('rate3');
    this.rate4 = +localStorage.getItem('rate4');
    this.rate5 = +localStorage.getItem('rate5');
    this.rate6 = +localStorage.getItem('rate6');
    this.review = this.getValue();
    this.review2 = this.getValue2();
    this.review3 = this.getValue3();
    this.review4 = this.getValue4();
    this.review5 = this.getValue5();
    this.review6 = this.getValue6();
    this.nombre = this.getNombre();
    this.profesion = this.getProfesiones();
  }

  getImage(_imageUrl: string, index: number) {
    this.http.get(
      'https://api.waifu.pics/sfw/waifu', // La URL para hacer la solicitud GET
      { responseType: 'text' }) // Las opciones para la solicitud GET
      .subscribe(data => {
        const imageData = JSON.parse(data); // Analiza los datos de respuesta como JSON
        const base64data = imageData.url; // Obtiene la URL de la imagen desde los datos JSON analizados
        this.imageUrls[index] = base64data; // Actualiza el índice correspondiente en el arreglo imageUrls
      });
  }

  loadMoreImages(event) {
    if (this.hasMoreImages) {
        this.imageUrls.forEach((imageUrl, index) => {
            this.getImage(imageUrl, index); // Llamar a la función getImage para cada URL de imagen
        });
    } else {
        event.target.complete(); // Si no hay más imágenes, completa el evento
    }
  }

  updateRate(card: number, value: number) {
    switch (card) {
        case 1:
            this.rate = value;
            localStorage.setItem('rate', value.toString());
            break;
        case 2:
            this.rate2 = value;
            localStorage.setItem('rate2', value.toString());
            break;
        case 3:
            this.rate3 = value;
            localStorage.setItem('rate3', value.toString());
            break;
        case 4:
            this.rate4 = value;
            localStorage.setItem('rate4', value.toString());
            break;
        case 5:
            this.rate5 = value;
            localStorage.setItem('rate5', value.toString());
            break;
        case 6:
            this.rate6 = value;
            localStorage.setItem('rate6', value.toString());
            break;
    }
  }

  clearLocalStorage() {
    localStorage.clear();
    window.location.reload();
    console.log('Local storage cleared');
  }

  reload() {
    window.location.reload();
  }

  reviewRate() {
    const review = (document.getElementById('1') as HTMLInputElement).value;
      localStorage.setItem('review', review);
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review
      });
  }

  reviewRate2() {
    const review2 = (document.getElementById('2') as HTMLInputElement).value;
      localStorage.setItem('review2', review2);
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review2
      });
  }

  reviewRate3() {
    const review3 = (document.getElementById('3') as HTMLInputElement).value;
      localStorage.setItem('review3', review3);
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review3
      });
  }

  reviewRate4() {
    const review4 = (document.getElementById('4') as HTMLInputElement).value;
      localStorage.setItem('review4', review4);
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review4
      });
  }

  reviewRate5() {
    const review5 = (document.getElementById('5') as HTMLInputElement).value;
      localStorage.setItem('review5', review5.toString());
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review5
      });
  }

  reviewRate6() {
    const review6 = (document.getElementById('6') as HTMLInputElement).value;
      localStorage.setItem('review6', review6.toString());
    const db = getDatabase();
      update(ref(db, 'reviews/' ), {
        review6
      });
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

  getValue() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review');
      onValue(starCountRef, (snapshot) => {
    this.review = snapshot.val();
      console.log(this.review);
    });
  }

  getValue2() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review2');
      onValue(starCountRef, (snapshot) => {
    this.review2 = snapshot.val();
      console.log(this.review2);
    });
  }

  getValue3() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review3');
      onValue(starCountRef, (snapshot) => {
    this.review3 = snapshot.val();
      console.log(this.review3);
    });
  }

  getValue4() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review4');
      onValue(starCountRef, (snapshot) => {
    this.review4 = snapshot.val();
      console.log(this.review4);
    });
  }

  getValue5() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review5');
      onValue(starCountRef, (snapshot) => {
    this.review5 = snapshot.val();
      console.log(this.review5);
    });
  }

  getValue6() {
    const db = getDatabase();
    const starCountRef = ref(db, 'reviews/' + '/review6');
      onValue(starCountRef, (snapshot) => {
    this.review6 = snapshot.val();
      console.log(this.review6);
    });
  }
}

  /*Old methods only for backup on case of extreme bug*/

  /*writeUserData(review: string) {
    --this.writeUserData5(this.review5);
    const db = getDatabase();
    update(ref(db, 'reviews/' ), {
      review
    });
  }*/

  /*updateRate(value: number) {
    this.rate2 = value;
    localStorage.setItem('rate2', value.toString());
  }*/
