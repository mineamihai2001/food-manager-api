import { Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { GetAllIngredientsCommand } from "@services/commands/ingredients";
import { GetAllIngredientsService } from "@services/ingredients";

@Controller()
@ApiTags("Ingredients")
export class GetAllIngredientsController implements IController {
    public constructor(private readonly getAllIngredientsService: GetAllIngredientsService) {}

    @Get(":kitchenId")
    public async handle(@Param("kitchenId") kitchenId: string): Promise<unknown> {
        const command = new GetAllIngredientsCommand(kitchenId);

        return this.getAllIngredientsService.getAll(command);
    }
}
