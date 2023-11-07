import { Dish } from "@domain/entities";
import { UpdateResult } from "@domain/repo";
import { Injectable } from "@nestjs/common";
import { DishesRepository } from "@port/adapter/repositories";
import { UpdateDishCommand } from "@services/commands/dishes";

@Injectable()
export class UpdateDishService {
    public constructor(private readonly repository: DishesRepository) {}

    public updateDish(command: UpdateDishCommand): Promise<UpdateResult<Dish>> {
        return this.repository.update(
            command.getId(),
            new Dish(
                command.getKitchenId(),
                command.getName(),
                command.getDescription(),
                command.getCoverPhoto(),
                command.getRecipe(),
                command.getIngredientIds(),
            ),
        );
    }
}
