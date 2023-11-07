import { ApiProperty } from "@nestjs/swagger";

export class UpdateDishDto {
    @ApiProperty()
    id: string;

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
    recipe: string;
}
