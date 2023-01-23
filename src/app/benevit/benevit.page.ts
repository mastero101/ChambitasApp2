import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-benevit', // Este es el selector CSS para este componente
  templateUrl: './benevit.page.html', // La ruta del template HTML para este componente
  styleUrls: ['./benevit.page.scss'], // La ruta(s) de los estilos SCSS para este componente
})
export class BenevitPage implements OnInit {
  imageUrls = [
    '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '',
  ]; // Este arreglo contiene las URLs de las imágenes (18x)
  hasMoreImages = true; // Esta bandera indica si hay más imágenes para cargar

  constructor(private http: HttpClient) { } // Inyecta una instancia de HttpClient para hacer solicitudes HTTP

  ngOnInit() {
    this.imageUrls.forEach((imageUrl, index) => {
        this.getImage(imageUrl, index); // Para cada URL de imagen, llama a la función getImage
    });
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
}}
