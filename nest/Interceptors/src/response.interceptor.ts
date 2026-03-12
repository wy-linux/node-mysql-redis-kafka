import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    return next.handle().pipe(
      tap(() => {
        console.log(`${method} ${url} - 耗时: ${Date.now() - now}ms`);
      }),
      map((data) => {
        return {
          data,
          statusCode: 200,
          message: '请求成功',
          duration: `${Date.now() - now}ms`,
        };
      }),
    );
  }
}
