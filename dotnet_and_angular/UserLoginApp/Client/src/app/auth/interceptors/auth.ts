import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status >= 400 && err.status < 500) {
        authService.logout().subscribe();
        router.navigate(['/auth/login']);
      }
      return throwError(() => err);
    })
  );
};
