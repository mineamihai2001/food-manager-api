import { ApiProperty } from "@nestjs/swagger";

export class GetDishesByIngredientsDto {
    @ApiProperty({ isArray: true })
    ingredientIds: string[];
}
