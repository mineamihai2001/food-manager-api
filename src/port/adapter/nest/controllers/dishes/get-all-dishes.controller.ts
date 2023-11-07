import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetAllDishesService } from "@services/dishes";
import { IController } from "../types";
import { GetAllDishesCommand } from "@services/commands/dishes";

@Controller()
@ApiTags("Dishes")
export class GetAllDishesController implements IController {
    public constructor(private readonly getAllDishesService: GetAllDishesService) {}

    @Get(":kitchenId")
    public async handle(@Param("kitchenId") kitchenId: string): Promise<unknown> {
        const command = new GetAllDishesCommand(kitchenId);

        return this.getAllDishesService.getAll(command);
    }
}
