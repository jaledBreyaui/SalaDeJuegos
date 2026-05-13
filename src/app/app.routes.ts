import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import("./components/home/home").then(m => m.Home),
    },
    {
        path: 'register',
        loadComponent: () => import("./components/register/register").then(m => m.Register),
    },
    {
        path: 'about',
        loadComponent: () => import("./components/about/about").then(m => m.About),
    },
    {
        path: 'chat',
        canActivate: [authGuard],
        loadComponent: () => import("./components/chat/chat").then(m => m.Chat),
    },
    {
        path: 'resultados',
        loadComponent: () => import("./components/lista-resultados/lista-resultados").then(m => m.ListaResultados)
    },
    {
        path: 'juegos/ahorcado',
        canActivate: [authGuard],
        loadComponent: () => import("./components/ahorcado/ahorcado").then(m => m.Ahorcado),
    },
    {
        path: 'juegos/mayormenor',
        loadComponent: () => import("./components/mayormenor/mayormenor").then(m => m.Mayormenor)
    },
    {
        path:'juegos/wordle',
        loadComponent: () => import("./components/wordle/wordle").then( m => m.Wordle )
    }

];
