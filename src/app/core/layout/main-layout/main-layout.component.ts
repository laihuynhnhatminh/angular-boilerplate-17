import { Component } from '@angular/core';
import { COMMON_MODULES } from 'src/app/shared/constants';

import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  imports: [...COMMON_MODULES, HeaderComponent, FooterComponent],
  standalone: true,
})
export class MainLayoutComponent {}
