import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class UpdateIngredientDto {
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    kitchenId: string;
}
