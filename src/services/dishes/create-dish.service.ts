import { Dish } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { DishesRepository } from "@port/adapter/repositories/dishes";
import { CreateDishCommand } from "@services/commands/dishes";

@Injectable()
export class CreateDishService {
    public constructor(private readonly repository: DishesRepository) {}

    public createDish(command: CreateDishCommand): Promise<Dish> {
        return this.repository.add(
            new Dish(
                command.getKitchenId(),
                command.getName(),
                command.getDescription(),
                command.getCoverPhoto(),
                command.getRecipe(),
                command.getIngredientIds(),
                command.getDuration(),
            ),
        );
    }
}
