import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { CreateIngredientDto } from "@services/dtos/ingredients";
import { CreateIngredientCommand } from "@services/commands/ingredients";
import { CreateIngredientService } from "@services/ingredients";

@Controller()
@ApiTags("Ingredients")
export class CreateIngredientController implements IController {
    public constructor(private readonly createIngredientService: CreateIngredientService) {}

    @Post()
    public async handle(@Body() dto: CreateIngredientDto): Promise<unknown> {
        const command = new CreateIngredientCommand(dto.name, dto.kitchenId);

        return this.createIngredientService.createIngredient(command);
    }
}
