import { Injectable } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'user',
        brokers: ['localhost:9092'],
      },
      consumer: {
        groupId: 'user-consumer' // consumer same as in micro service
      }
    }
  })
  client: ClientKafka;

  async onModuleInit() {
    /**
     * Here We need to subscribe to topic,
     * so that we get response back
     */
    this.client.subscribeToResponseOf('user-topic');
    await this.client.connect();
  }

  getUserById(id : number) {
    return this.client.send('user-topic', { userid : id }); ;
  }
}
