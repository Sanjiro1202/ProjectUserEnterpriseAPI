import { ArrayMinSize, IsArray, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";

export class UpdateUserDto {

    @IsString()
    readonly username: string;

    @IsString()
    readonly password: string;

    @IsString()
    readonly profesional_headline: string;

    @IsUUID()
    readonly enterprise_id: UUID;

    @IsArray()
    @IsUUID('all',{ each: true })
    @ArrayMinSize(1)
    readonly active_projects: UUID[];
}
