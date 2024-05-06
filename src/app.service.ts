import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getText(): string {
    return 'Text string';
  }

  login(phone: string, password: string): string {
    return `Login success with phone: ${phone} and password: ${password}`;
  }
}
