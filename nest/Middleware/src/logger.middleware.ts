import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Class Middleware... ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Function Middleware... ${req.method} ${req.originalUrl} - ${new Date().toISOString()}`);
  next();
}