import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register', // Este es el selector css para el componente de registro
  templateUrl: './register.page.html', // La ruta del template HTML para la página de registro
  styleUrls: ['./register.page.scss'], // La ruta de los estilos SCSS para la página de registro
})
export class RegisterPage implements OnInit {

  form = this.formBuilder.group({
    // eslint-disable-next-line max-len
    email: ['', [Validators.email, Validators.required]], // Campo de correo electrónico con validador de correo electrónico y validador requerido
    password:['', [Validators.required]], // Campo de contraseña con validador requerido
    confirmPassword:['', [Validators.required]], // Campo de confirmación de contraseña con validador requerido
  });

  constructor(
    private formBuilder: FormBuilder, // FormBuilder se inyecta para crear el formulario
    private auth: AuthService, // Servicio de autenticación para hacer la solicitud de registro
    private router: Router, // Router para navegar a home después de un registro exitoso
  ) { }

  ngOnInit() {
  }

  register(){
    if (this.form.valid){ // Si el formulario es válido
      const { email, password } = this.form.getRawValue(); // Los campos de correo electrónico y contraseña se desestructuran
      this.auth.register(email, password) // Solicitud de registro se realiza con el correo electrónico y la contraseña
      .then(() => {
        console.log('register');
        this.router.navigate(['/home']); // Navegar a /home después del registro exitoso
      })
      .catch(error => {
        console.error(error);
      });
    } else {
      this.form.markAllAsTouched(); // Si el formulario es inválido, todos los campos se marcan como tocados
    }
  }
}
