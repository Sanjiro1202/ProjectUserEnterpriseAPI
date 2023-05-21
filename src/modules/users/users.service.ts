import { Injectable } from '@nestjs/common';
import { UUID, randomUUID } from 'crypto';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
    private users: User[] = [{
        user_id: randomUUID(),
        username: 'Sanjiro',
        password: '12345678',
        profesional_headline: 'Systems engineer',
        created_at: new Date(),
        updated_at: new Date(),
        enterprise_id: randomUUID(),
        active_projects: [],
    }];

    getUsers(): User[] {
        return this.users;
    }

    getUserById(id: UUID): User {
        return this.users.find((item) => item.user_id == id);
    }

    createUser({ username ,password ,profesional_headline, enterprise_id, active_projects }: CreateUserDto) {
        this.users.push({
            user_id: randomUUID(),
            username: username,
            password: password,
            profesional_headline: profesional_headline,
            created_at: new Date(),
            updated_at: new Date(),
            enterprise_id: enterprise_id,
            active_projects: active_projects,
        })
    }

    updateUser(id: UUID, { username, password, profesional_headline, enterprise_id, active_projects }: UpdateUserDto) {
        const user = this.getUserById(id);
        user.username = username;
        user.password = password;
        user.profesional_headline = profesional_headline;
        user.updated_at = new Date();
        user.enterprise_id = enterprise_id;
        user.active_projects = active_projects;
    }

    deleteUser(id: UUID) {
        const position = this.users.findIndex((item) => item.user_id == id);
        if (position >= 0) {
            this.users.splice(position, 1);
        }
    }

}
