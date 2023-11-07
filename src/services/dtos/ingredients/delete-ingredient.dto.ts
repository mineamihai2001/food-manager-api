import { ApiProperty } from "@nestjs/swagger";

export class RemoveIngredientDto {
    @ApiProperty()
    id: string;
}
