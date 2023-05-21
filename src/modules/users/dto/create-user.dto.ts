import { ArrayMinSize, IsArray, IsDateString, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class CreateUserDto {

    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly profesional_headline: string;

    @IsDateString()
    readonly created_at: Date;

    @IsDateString()
    readonly updated_at: Date;

    @IsUUID()
    readonly enterprise_id: UUID;

    @IsArray()
    @IsUUID('all',{ each: true })
    @ArrayMinSize(1)
    readonly active_projects: UUID[];
}
