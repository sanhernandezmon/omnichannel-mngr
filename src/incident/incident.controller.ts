// src/incident/incident.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { SnsService } from '../sns/sns.service';

@Controller('incident')
export class IncidentController {
  constructor(private readonly snsService: SnsService) {}

  @Post()
  async createIncident(@Body() payload: any): Promise<void> {
    await this.snsService.publishMessage(payload);
  }
}
