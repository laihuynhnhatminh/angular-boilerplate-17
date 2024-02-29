import { provideHttpClient, withInterceptors } from '@angular/common/http';
import type { ApplicationConfig } from '@angular/core';
import { InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { jwtInterceptor, serverErrorInterceptor } from '@core/interceptors';
import { APP_ENV } from '@env/environment';

import { routes } from './app.routes';

export interface AppConfig {
  production: boolean;
  apiBaseUrl: string;
}

const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

export const appConfig: ApplicationConfig = {
  providers: [
    // Routers
    provideRouter(routes),
    // Http Client Providers
    provideHttpClient(
      withInterceptors([jwtInterceptor, serverErrorInterceptor])
    ),
    // App ENV Config
    {
      provide: APP_CONFIG,
      useValue: APP_ENV,
    },
  ],
};
