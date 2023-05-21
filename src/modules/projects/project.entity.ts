import { UUID } from 'crypto';

export class Project {

    project_id: UUID;

    description: string;

    name: string;

    start_date: Date;

    end_date: Date;

    created_at: Date;

    updated_at: Date;

    state: string;

    enterprise_id: UUID;

    involved_users: UUID[];
}
