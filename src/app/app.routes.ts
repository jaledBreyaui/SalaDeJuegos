import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/register/register').then((m) => m.Register),
  },
  {
    path: 'about',
    loadComponent: () => import('./components/about/about').then((m) => m.About),
  },
  {
    path: 'chat',
    canActivate: [authGuard],
    loadComponent: () => import('./components/chat/chat').then((m) => m.Chat),
  },
  {
    path: 'resultados',
    loadComponent: () =>
      import('./components/lista-resultados/lista-resultados').then((m) => m.ListaResultados),
  },
  {
    path: 'comunidad/encuesta',
    canActivate: [authGuard],
    loadComponent: () => import('./components/encuesta/encuesta').then((m) => m.Encuesta),
  },
  {
    path: 'comunidad/resultados-encuestas',
    canActivate: [adminGuard],
    loadComponent: () =>
      import('./components/encuestas-resultados/encuestas-resultados').then(
        (m) => m.EncuestasResultados,
      ),
  },
  {
    path: 'juegos/ahorcado',
    canActivate: [authGuard],
    loadComponent: () => import('./components/ahorcado/ahorcado').then((m) => m.Ahorcado),
  },
  {
    path: 'juegos/mayormenor',
    canActivate: [authGuard],
    loadComponent: () => import('./components/mayormenor/mayormenor').then((m) => m.Mayormenor),
  },
  {
    path: 'juegos/wordle',
    canActivate: [authGuard],
    loadComponent: () => import('./components/wordle/wordle').then((m) => m.Wordle),
  },
  {
    path: 'juegos/preguntados',
    canActivate: [authGuard],
    loadComponent: () => import('./components/preguntados/preguntados').then((m) => m.Preguntados),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
