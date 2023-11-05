import { Ingredient } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { IngredientsRepository } from "@port/adapter/repositories";
import { CreateIngredientCommand } from "@services/commands/ingredients";

@Injectable()
export class CreateIngredientService {
    public constructor(private readonly repository: IngredientsRepository) {}

    public createIngredient(command: CreateIngredientCommand): Promise<Ingredient> {
        return this.repository.add(new Ingredient(command.getName(), command.getKitchenId()));
    }
}
