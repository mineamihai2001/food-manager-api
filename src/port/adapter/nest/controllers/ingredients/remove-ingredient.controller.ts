import { Body, Controller, Delete, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { CreateIngredientDto, RemoveIngredientDto } from "@services/dtos/ingredients";
import { CreateIngredientCommand, RemoveIngredientCommand } from "@services/commands/ingredients";
import { RemoveIngredientService } from "@services/ingredients";

@Controller()
@ApiTags("Ingredients")
export class RemoveIngredientController implements IController {
    public constructor(private readonly removeIngredientService: RemoveIngredientService) {}

    @Delete()
    public async handle(@Body() dto: RemoveIngredientDto): Promise<unknown> {
        const command = new RemoveIngredientCommand(dto.id);

        return this.removeIngredientService.removeIngredient(command);
    }
}
