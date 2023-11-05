import { Ingredient } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { IngredientsRepository } from "@port/adapter/repositories";
import { GetAllIngredientsCommand } from "@services/commands/ingredients";

@Injectable()
export class GetAllIngredientsService {
    public constructor(private readonly repository: IngredientsRepository) {}

    public getAll(command: GetAllIngredientsCommand): Promise<Ingredient[]> {
        return this.repository.getByKitchenId(command.getKitchenId());
    }
}
