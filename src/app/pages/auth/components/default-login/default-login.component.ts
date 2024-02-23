import { Component } from '@angular/core';
import { COMMON_MODULES } from '@shared/constants';

@Component({
  selector: 'app-default-login',
  templateUrl: './default-login.component.html',
  styleUrls: ['./default-login.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES],
})
export class DefaultLoginComponent {}
