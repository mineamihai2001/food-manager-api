import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { CreateDishCommand } from "@services/commands/dishes";
import { CreateDishService } from "@services/dishes";
import { CreateDishDto } from "@services/dtos/dishes";

@Controller()
@ApiTags("Dishes")
export class CreateDishController implements IController {
    public constructor(private readonly createDishService: CreateDishService) {}

    @Post()
    public async handle(@Body() dto: CreateDishDto): Promise<unknown> {
        const command = new CreateDishCommand(
            dto.kitchenId,
            dto.name,
            dto.description,
            dto.coverPhoto,
            dto.recipe,
            dto.ingredientIds,
        );

        return this.createDishService.createDish(command);
    }
}
