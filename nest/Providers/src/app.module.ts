import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigService } from './factory-providers/config.provider'
import { DatabaseService } from './factory-providers/database.provider'

@Module({
  imports: [],
  controllers: [AppController],
  // providers: [AppService],
  providers: [
    {
      provide: AppService,
      useClass: AppService
    },
    {
      provide: 'useClass',
      useClass: AppService
    },
    {
      provide: 'useValue',
      useValue: ['MySQL', 'Redis', 'Nest', 'Kafka']
    },
    ConfigService,
    {
      provide: 'useFactory',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        console.log(configService.getEnvConfig())
        return new DatabaseService(configService.getEnvConfig())
      }
    }
  ]
})
export class AppModule {}
