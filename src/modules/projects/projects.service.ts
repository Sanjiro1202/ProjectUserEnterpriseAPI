import { Injectable } from '@nestjs/common';
import { Project } from './project.entity';
import { UUID, randomUUID } from 'crypto';
import { CreateProjectDto, UpdateProjectDto } from './dto';

@Injectable()
export class ProjectsService {
    private projects: Project[] = [
        {
            project_id: "ec700933-bb2c-4591-9f88-4f70eca01d8",
            description: 'First project',
            name: 'NestJS Weather API',
            start_date: new Date(),
            end_date: new Date(2024,5,12,11,58,5,6),
            created_at: new Date(),
            updated_at: new Date(),
            state: '',
            enterprise_id: randomUUID(),
            involved_users: [],
        }
    ];

    getProjects(): Project[]{
        return this.projects;
    }

    getProjectById(id: UUID): Project{
        return this.projects.find((item)=> item.project_id == id);
    }

    createProject({description, name, end_date, state, enterprise_id, involved_users}: CreateProjectDto){
        this.projects.push({
            project_id: randomUUID(),
            description: description,
            name: name,
            start_date: new Date(),
            end_date: end_date,
            created_at: new Date(),
            updated_at: new Date(),
            state: state,
            enterprise_id: enterprise_id,
            involved_users: involved_users,
        })
    }

    updateProject(id: UUID, {description, name, end_date, state, enterprise_id, involved_users}: UpdateProjectDto){
        const project = this.getProjectById(id);
        project.name = name;
        project.description = description;
        project.end_date = end_date;
        project.state = state;
        project.enterprise_id = enterprise_id;
        project.involved_users = involved_users;
    }

    deleteProject(id: UUID){
        const position = this.projects.findIndex((item)=>item.project_id == id);
        if(position>=0){
            this.projects.splice(position,1);
        }
    }
}
