// src/sns/sns.service.ts

import { Injectable } from '@nestjs/common';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SnsService {
  private snsClient: SNSClient;
  private topicArn: string;

  constructor() {
    const region = "us-east-2";
    this.topicArn = "arn:aws:sns:us-east-2:908027377460:Incidentes_create_pqrs";
    this.snsClient = new SNSClient({ region });
  }

  async publishMessage(message: any): Promise<void> {
    const command = new PublishCommand({
      TopicArn: this.topicArn,
      Message: JSON.stringify(message),
    });

    try {
      await this.snsClient.send(command);
      console.log('Message published to SNS:', message);
    } catch (error) {
      console.error('Error publishing message to SNS:', error);
    }
  }
}
