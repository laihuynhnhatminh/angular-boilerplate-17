import { HttpInterceptorFn } from '@angular/common/http';
import { storage } from '@shared/utils';

export const jwtInterceptor: HttpInterceptorFn = (request, next) => {
  const token = storage.getItem('appSession')?.token;

  if (token) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request);
};
