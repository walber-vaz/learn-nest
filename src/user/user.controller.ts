import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: any) {
    return { body };
  }

  @Get()
  async findAll() {
    return { users: [{}] };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return { user: {}, id };
  }
}
