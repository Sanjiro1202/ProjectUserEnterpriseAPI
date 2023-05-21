import { Module } from '@nestjs/common';

import { UsersModule } from './modules/users/users.module';
import { EnterprisesModule } from './modules/enterprises/enterprises.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [UsersModule, EnterprisesModule, ProjectsModule],
})
export class AppModule {}
