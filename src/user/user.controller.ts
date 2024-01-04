import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
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

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return { user: {}, id, body };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return { user: {}, id };
  }
}
