import { Injectable } from "@nestjs/common";
import { DishesRepository } from "@port/adapter/repositories";
import { RemoveDishCommand } from "@services/commands/dishes";

@Injectable()
export class RemoveDishService {
    public constructor(private readonly repository: DishesRepository) {}

    public async removeDish(command: RemoveDishCommand): Promise<boolean> {
        return this.repository.deleteById(command.getDishId()).then((res) => res.acknowledged);
    }
}
