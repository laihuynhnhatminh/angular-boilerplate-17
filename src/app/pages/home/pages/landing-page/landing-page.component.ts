import { Component } from '@angular/core';
import { LandingComponent } from '@page/home/components/landing/landing.component';
import { COMMON_MODULES } from 'src/app/shared/constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [...COMMON_MODULES, LandingComponent],
  standalone: true,
})
export class LandingPageComponent {}
