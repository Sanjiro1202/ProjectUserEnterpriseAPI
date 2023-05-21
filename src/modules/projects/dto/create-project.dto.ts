import { ArrayMinSize, IsArray, IsDateString, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto"

export class CreateProjectDto {

    @IsString()
    readonly description: string;

    @IsString()
    readonly name: string;

    @IsDateString()
    readonly end_date: Date;

    @IsString()
    readonly state: string;

    @IsUUID()
    readonly enterprise_id: UUID;

    @IsArray()
    @IsUUID('all',{ each: true })
    @ArrayMinSize(1)
    readonly involved_users: UUID[];
}
