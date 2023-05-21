import { IsDate, IsEmpty, IsOptional, IsString } from "class-validator";

export class UpdateEnterpriseDto {

    @IsEmpty()
    @IsString()
    readonly name: string;

    readonly updated_at: Date;
}
