import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RemoveIngredientDto {
    @ApiProperty()
    @IsString()
    id: string;
}
