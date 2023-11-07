import { Dish } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { DishesRepository } from "@port/adapter/repositories";
import { GetAllDishesCommand } from "@services/commands/dishes";

@Injectable()
export class GetAllDishesService {
    public constructor(private readonly repository: DishesRepository) {}

    public getAll(command: GetAllDishesCommand): Promise<Dish[]> {
        return this.repository.getByKitchenId(command.getKitchenId());
    }
}
