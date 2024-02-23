import { Component } from '@angular/core';
import { DefaultLoginComponent } from '@page/auth/components/default-login/default-login.component';
import { COMMON_MODULES } from '@shared/constants';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES, DefaultLoginComponent],
})
export class RegisterPageComponent {}
