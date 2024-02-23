import { Component } from '@angular/core';
import { COMMON_MODULES } from '@shared/constants';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES],
})
export class DefaultHomeComponent {}
