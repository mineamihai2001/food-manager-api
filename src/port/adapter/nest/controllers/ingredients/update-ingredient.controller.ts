import { Body, Controller, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { UpdateIngredientDto } from "@services/dtos/ingredients";
import { UpdateIngredientCommand } from "@services/commands/ingredients";
import { UpdateIngredientService } from "@services/ingredients";

@Controller()
@ApiTags("Ingredients")
export class UpdateIngredientController implements IController {
    public constructor(private readonly updateIngredientService: UpdateIngredientService) {}

    @Put()
    public async handle(@Body() dto: UpdateIngredientDto): Promise<unknown> {
        const command = new UpdateIngredientCommand(dto.id, dto.name, dto.kitchenId);

        return this.updateIngredientService.updateIngredient(command).then((res) => res.entity);
    }
}
