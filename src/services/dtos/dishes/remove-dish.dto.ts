import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RemoveDishDto {
    @ApiProperty()
    @IsString()
    id: string;
}
