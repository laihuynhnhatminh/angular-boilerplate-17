import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { APP_CONFIG, type AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) public config: AppConfig) {
    console.log(
      `App component created in ${config.production ? 'production' : 'development'} environment`
    );
  }
}
