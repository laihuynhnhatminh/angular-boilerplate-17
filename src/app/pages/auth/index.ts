import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: async () =>
      (await import('./pages/login-page/login-page.component'))
        .LoginPageComponent,
  },
  {
    path: 'register',
    title: 'Register',
    loadComponent: async () =>
      (await import('./pages/register-page/register-page.component'))
        .RegisterPageComponent,
  },
];
