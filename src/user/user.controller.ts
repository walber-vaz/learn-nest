import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    password = '********';
    return { email, name, password };
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
  async update(
    @Param('id') id: string,
    @Body() { email, name, password }: UpdateUserDTO,
  ) {
    password = '********';
    return { email, name, password };
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: string) {
    return { user: {}, id };
  }
}
