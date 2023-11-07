import { Body, Controller, Get, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RemoveDishService, UpdateDishService } from "@services/dishes";
import { IController } from "../types";
import { RemoveDishCommand, UpdateDishCommand } from "@services/commands/dishes";
import { RemoveDishDto, UpdateDishDto } from "@services/dtos/dishes";

@Controller()
@ApiTags("Dishes")
export class UpdateDishController implements IController {
    public constructor(private readonly updateDishesService: UpdateDishService) {}

    @Put()
    public async handle(@Body() dto: UpdateDishDto): Promise<unknown> {
        const command = new UpdateDishCommand(
            dto.id,
            dto.name,
            dto.kitchenId,
            dto.description,
            dto.coverPhoto,
            dto.recipe,
            dto.ingredientIds,
        );

        return this.updateDishesService.updateDish(command).then((res) => res.entity);
    }
}
