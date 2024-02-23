import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    title: 'Landing',
    loadComponent: async () =>
      (await import('./pages/landing-page/landing-page.component'))
        .LandingPageComponent,
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: async () =>
      (await import('./pages/home-page/home-page.component')).HomePageComponent,
  },
];
