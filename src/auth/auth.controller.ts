/* eslint-disable prettier/prettier */
import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() input: { username: string; password: string }) {
    return this.authService.authenticate(input);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  getUserInfo(@Request() request) {
    return request.user;
  }
}
