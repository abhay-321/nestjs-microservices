import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy, ClientOptions } from '@nestjs/microservices';

// Creating client options here, specifying address & port of server
const clientOptions : ClientOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
    retryAttempts : 5,
    retryDelay : 5000
  },
}

@Injectable()
export class AppService {
  private readonly client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create(clientOptions);
  }

  getUser(username) {
    return this.client.send<User, string>('get_user', username);
  }
}
