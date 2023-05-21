import { IsEmpty, IsString } from "class-validator";
import { UUID } from "crypto";

export class CreateEnterpriseDto {

    @IsEmpty()
    @IsString()
    readonly name: string;

}
