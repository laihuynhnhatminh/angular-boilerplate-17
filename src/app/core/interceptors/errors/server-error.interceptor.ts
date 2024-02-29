import type {
  HttpErrorResponse,
  HttpInterceptorFn,
} from '@angular/common/http';
import { HttpStatusCode } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor that handles server errors.
 * Note, will be updated and improved in the future. (name might change to authErrorInterceptor)
 *
 * @param request The request object.
 * @param next The next interceptor in the chain.
 *
 * @returns The next Observable.
 */
export const serverErrorInterceptor: HttpInterceptorFn = (request, next) => {
  const router = inject(Router);

  return next(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (
        [HttpStatusCode.Unauthorized, HttpStatusCode.Forbidden].includes(
          error.status
        )
      ) {
        // TODO: To test if void is needed instead of eslint-disable-next-line
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        router.navigateByUrl('/auth/login');
      }

      return throwError(() => error);
    })
  );
};
