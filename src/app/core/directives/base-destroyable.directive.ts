import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class BaseDestroyable implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
