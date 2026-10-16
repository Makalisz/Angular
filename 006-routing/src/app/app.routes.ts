import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Special } from './components/special/special';
import { Error404 } from './components/error404/error404';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact},
    {path: 'special/:id', component: Special},
    {path: '**', component: Error404}
];
