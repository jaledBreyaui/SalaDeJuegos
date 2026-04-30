import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Register } from './components/register/register';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'register',
        component: Register,
    },
    {
        path: 'about',
        component: About,
    }

];
