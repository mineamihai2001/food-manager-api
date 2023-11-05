import { Ingredient } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { IngredientsRepository } from "@port/adapter/repositories";
import { UpdateIngredientCommand } from "@services/commands/ingredients";

@Injectable()
export class UpdateIngredientService {
    public constructor(private readonly repository: IngredientsRepository) {}

    public updateIngredient(command: UpdateIngredientCommand): Promise<Ingredient> {
        return this.repository.update(command.getId(), new Ingredient(command.getName(), command.getKitchenId()));
    }
}
