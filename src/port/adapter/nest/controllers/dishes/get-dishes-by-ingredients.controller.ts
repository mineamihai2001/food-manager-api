import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { GetDishesByIngredientsService } from "@services/dishes";
import { IController } from "../types";
import { GetDishesByIngredientsDto } from "@services/dtos/dishes";
import { GetAllIngredientsCommand } from "@services/commands/ingredients";
import { GetDishesByIngredientsCommand } from "@services/commands/dishes";

@Controller()
@ApiTags("Dishes")
export class GetDishesByIngredientsController implements IController {
    public constructor(public readonly getDishesByIngredientsService: GetDishesByIngredientsService) {}

    @Post("ingredients")
    public async handle(@Body() dto: GetDishesByIngredientsDto): Promise<unknown> {
        const command = new GetDishesByIngredientsCommand(dto.ingredientIds);

        return this.getDishesByIngredientsService.getDishesByIngredients(command);
    }
}
