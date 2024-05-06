import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/text')
  getText(@Res() res: Response) {
    res.status(HttpStatus.OK).json({
      text: this.appService.getText(),
    });
  }

  @Post('/login')
  loginController(
    @Res() res: Response,
    @Body() payload: { phone: string; password: string },
  ) {
    res.status(HttpStatus.OK).json({
      user: this.appService.login(payload.phone, payload.password),
    });
  }
}
