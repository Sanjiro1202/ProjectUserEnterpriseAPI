import { UUID } from "crypto";

export class Enterprise{
    
    enterprise_id: UUID;

    name: string;

    created_at: Date;
    
    updated_at: Date;
}