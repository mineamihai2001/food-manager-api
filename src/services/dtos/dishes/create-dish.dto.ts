import { DishDuration, RecipeStep } from "@domain/entities";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class CreateDishDto {
    @ApiProperty()
    @IsString()
    kitchenId: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    coverPhoto: string;

    @ApiProperty()
    @IsString()
    ingredientIds: string[];

    @ApiProperty()
    @IsString()
    recipe: RecipeStep[];

    @ApiProperty()
    @Type(() => DishDurationDto)
    duration: DishDuration;
}

class DishDurationDto {
    @ApiProperty()
    @IsString()
    min: number;

    @ApiProperty()
    @IsString()
    max: number;
}
