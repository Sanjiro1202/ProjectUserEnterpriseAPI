import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { UUID } from 'crypto';
import { CreateProjectDto, UpdateProjectDto } from './dto';
import { Project } from './project.entity';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectService: ProjectsService) {};

    @Get()
    getProjects(): Project[]{
        return this.projectService.getProjects();
    }

    @Get(':id')
    getProjectById(@Param('id') id: UUID): Project{
        return this.projectService.getProjectById(id);
    }

    @Post()
    createProject(@Body() project: CreateProjectDto){
        this.projectService.createProject(project);
    }

    @Patch(':id')
    updateProject(@Param('id') id: UUID, @Body() project: UpdateProjectDto){
        this.projectService.updateProject(id,project);
    }

    @Delete(':id')
    deleteProject(@Param('id') id: UUID){
        this.projectService.deleteProject(id);
    }
}
