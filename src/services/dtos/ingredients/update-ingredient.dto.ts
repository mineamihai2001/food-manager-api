import { ApiProperty } from "@nestjs/swagger";

export class UpdateIngredientDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    kitchenId: string;
}
