import { Component } from '@angular/core';
import { COMMON_MODULES } from '@shared/constants';

@Component({
  selector: 'app-default-error',
  templateUrl: './default-error.component.html',
  styleUrls: ['./default-error.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES],
})
export class DefaultErrorComponent {}
