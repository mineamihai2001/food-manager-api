import { Dish } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { DishesRepository } from "@port/adapter/repositories";
import { GetDishesByIngredientsCommand } from "@services/commands/dishes";

@Injectable()
export class GetDishesByIngredientsService {
    public constructor(private readonly repo: DishesRepository) {}

    public getDishesByIngredients(command: GetDishesByIngredientsCommand): Promise<Dish[]> {
        return this.repo.getByIngredientIds(command.getIngredientsIds());
    }
}
