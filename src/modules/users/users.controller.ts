import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { UUID } from 'crypto';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getusers(): User[]{
        return this.userService.getUsers();
    }

    @Get(':id')
    getuserById(@Param('id') id: UUID): User{
        return this.userService.getUserById(id);
    }

    @Post()
    createuser(@Body() user: CreateUserDto){
        this.userService.createUser(user);
    }

    @Patch(':id')
    updateuser(@Param('id') id: UUID, @Body() user: UpdateUserDto){
        this.userService.updateUser(id,user);
    }

    @Delete(':id')
    deleteuser(@Param('id') id: UUID){
        this.userService.deleteUser(id);
    }
}
