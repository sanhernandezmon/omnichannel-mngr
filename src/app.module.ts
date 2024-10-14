// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IncidentController } from './incident/incident.controller';
import { SnsService } from './sns/sns.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
    }),
  ],
  controllers: [IncidentController],
  providers: [SnsService],
})
export class AppModule {}
