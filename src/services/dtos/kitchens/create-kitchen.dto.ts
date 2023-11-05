import { ApiProperty } from "@nestjs/swagger";

export class CreateKitchenDto {
    @ApiProperty()
    name: string;
}
