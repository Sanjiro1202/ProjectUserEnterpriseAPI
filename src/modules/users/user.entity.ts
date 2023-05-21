import { UUID } from "crypto";

export class User{
    
    user_id: UUID;

    username: string;
    
    password: string;
    
    profesional_headline: string;

    created_at: Date;
    
    updated_at: Date;
    
    enterprise_id: UUID;

    active_projects: UUID[];
}