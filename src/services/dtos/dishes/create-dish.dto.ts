import { DishDuration, RecipeStep } from "@domain/entities";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDishDto {
    @ApiProperty()
    kitchenId: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    coverPhoto: string;

    @ApiProperty()
    ingredientIds: string[];

    @ApiProperty()
    recipe: RecipeStep[];

    @ApiProperty()
    duration: DishDuration;
}
