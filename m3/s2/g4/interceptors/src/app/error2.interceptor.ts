import { HttpInterceptorFn } from '@angular/common/http';

export const error2Interceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
