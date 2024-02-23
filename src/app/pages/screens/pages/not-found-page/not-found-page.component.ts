import { Component } from '@angular/core';
import { DefaultErrorComponent } from '@page/screens/components/default-error/default-error.component';
import { COMMON_MODULES } from '@shared/constants';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss'],
  standalone: true,
  imports: [...COMMON_MODULES, DefaultErrorComponent],
})
export class NotFoundPageComponent {}
