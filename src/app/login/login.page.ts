import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../services/auth.service';
import { Auth2Service } from './../services/auth2.service';


@Component({
  selector: 'app-login', // Este es el selector CSS para el componente de inicio de sesión
  templateUrl: './login.page.html', // La ruta del template HTML para la página de inicio de sesión
  styleUrls: ['./login.page.scss'], // La ruta de los estilos SCSS para la página de inicio de sesión
})

export class LoginPage implements OnInit {

  form = this.formBuilder.group({
    // eslint-disable-next-line max-len
    email: ['', [Validators.email, Validators.required]], // Campo de correo electrónico con validador de correo electrónico y validador requerido
    password:['', [Validators.required]], // Campo de contraseña con validador requerido
  });

  constructor(
    private formBuilder: FormBuilder, // FormBuilder se inyecta para crear el formulario
    private auth: AuthService, // Servicio de autenticación para hacer la solicitud de inicio de sesión
    private router: Router, // Ruteador para navegar a home después de un inicio de sesión exitoso
    private auth2: Auth2Service, // Servicio de autenticación para hacer la solicitud de inicio de sesión 2
  ) { }

  ngOnInit() {
  }

  login(){
    if (this.form.valid){ // Si el formulario es válido
      const { email, password } = this.form.getRawValue(); // Los campos de correo electrónico y contraseña se desestructuran
      this.auth.login(email, password) // La solicitud de inicio de sesión se realiza con el correo electrónico y la contraseña
      .then(() => {
        this.router.navigate(['/home']); // Navegar a home después del inicio de sesión exitoso
      })
      .catch(error => {
        console.error(error); // Registra el error si ocurrió
      });
    } else {
      this.form.markAllAsTouched(); // Si el formulario es inválido, todos los campos se marcan como tocados
      alert('Usuario y Contraseña Incorrectas'); // Muestra el mensaje de error
    }
  }

  googleAuth(){
    this.auth2.googleAuth();
  }

  faceAuth(){
    this.auth2.faceAuth();
  }

  gitAuth(){
    this.auth2.gitAuth();
  }
}
