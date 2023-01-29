import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { reload } from 'firebase/auth';

import { filter } from 'rxjs/operators';

import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/profile', icon: 'person' },
    { title: 'Benevit', url: '/benevit', icon: 'archive' },
    { title: 'Trabajos', url: '/listcards', icon: 'man' },
    { title: 'Mapa', url: '/maps', icon: 'map' },
    { title: 'Registro Afiliado', url: '/worker-register', icon: 'laptop' },
    { title: 'Register', url: '/register', icon: 'book' },
    { title: 'Login', url: '/login', icon: 'log-in' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  user$ = this.auth.authState$.pipe(
    filter(state => state ? true : false)
  );

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async logout(){
    await this.auth.logout();
    this.router.navigate(['/login']);
  }

  toggleTheme() {
    const appElement = document.querySelector('ion-app');
    const elementClasses = appElement.classList;
    if (elementClasses.contains('dark-theme')) {
      elementClasses.remove('dark-theme');
    } else {
      elementClasses.add('dark-theme');
    }
  }
}
