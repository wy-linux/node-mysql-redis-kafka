import { Module, NestModule, MiddlewareConsumer, RequestMethod} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      // .forRoutes(AppController)
      .forRoutes({ path: 'wangyu', method: RequestMethod.GET });
  }
}



// NestJS 内部的简化逻辑
// class MiddlewareConsumer {
//   private middlewares = new Map();
  
//   apply(middlewareClass: any) {
//     // 检查是否已经实例化
//     if (!this.middlewares.has(middlewareClass)) {
//       // 从容器中解析依赖并创建实例
//       const instance = this.container.resolve(middlewareClass);
//       this.middlewares.set(middlewareClass, instance);
//     }
    
//     return new MiddlewareConfigBuilder(this.middlewares.get(middlewareClass));
//   }
// }
