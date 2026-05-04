import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import("./components/home/home").then(m=>m.Home),
    },
    {
        path: 'register',
        loadComponent: () => import("./components/register/register").then(m=>m.Register),
    },
    {
        path: 'about',
        loadComponent: () => import("./components/about/about").then(m => m.About),
    }

];
