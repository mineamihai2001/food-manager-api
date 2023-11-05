import { Injectable } from "@nestjs/common";
import { IngredientsRepository } from "@port/adapter/repositories";
import { RemoveIngredientCommand } from "@services/commands/ingredients";

@Injectable()
export class RemoveIngredientService {
    public constructor(private readonly repository: IngredientsRepository) {}

    public removeIngredient(command: RemoveIngredientCommand): Promise<boolean> {
        return this.repository.deleteById(command.getIngredientId()).then((res) => res.acknowledged);
    }
}
