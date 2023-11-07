import { ApiProperty } from "@nestjs/swagger";

export class RemoveDishDto {
    @ApiProperty()
    id: string;
}
