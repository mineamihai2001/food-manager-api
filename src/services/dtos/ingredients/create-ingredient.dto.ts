import { ApiProperty } from "@nestjs/swagger";

export class CreateIngredientDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    kitchenId: string;
}
