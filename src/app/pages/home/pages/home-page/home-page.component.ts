import { Component } from '@angular/core';
import { DefaultHomeComponent } from '@page/home/components/default-home/default-home.component';
import { COMMON_MODULES } from 'src/app/shared/constants';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [...COMMON_MODULES, DefaultHomeComponent],
  standalone: true,
})
export class HomePageComponent {}
