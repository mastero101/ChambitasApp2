import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);
const routes: Routes = [
  {
    path: '',
    redirectTo: 'launchscreen',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'launchscreen',
    loadChildren: () => import('./launchscreen/launchscreen.module').then( m => m.LaunchscreenPageModule),
  },
  {
    path: 'benevit',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./benevit/benevit.module').then( m => m.BenevitPageModule)
  },
  {
    path: 'listcards',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./listcards/listcards.module').then( m => m.ListcardsPageModule)
  },
  {
    path: 'maps',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'worker-register',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./worker-register/worker-register.module').then( m => m.WorkerRegisterPageModule)
  },
  {
    path: 'profile',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
