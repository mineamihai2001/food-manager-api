import { Body, Controller, Delete, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RemoveDishService } from "@services/dishes";
import { IController } from "../types";
import { RemoveDishCommand } from "@services/commands/dishes";
import { RemoveDishDto } from "@services/dtos/dishes";

@Controller()
@ApiTags("Dishes")
export class RemoveDishController implements IController {
    public constructor(private readonly removeDishService: RemoveDishService) {}

    @Delete()
    public async handle(@Body() dto: RemoveDishDto): Promise<unknown> {
        const command = new RemoveDishCommand(dto.id);

        return this.removeDishService.removeDish(command);
    }
}
