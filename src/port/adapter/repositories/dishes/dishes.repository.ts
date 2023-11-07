import { Dish } from "@domain/entities";
import { CrudRepository } from "../crud.repository";
import { Inject, Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";

@Injectable()
export class DishesRepository extends CrudRepository<Dish> {
    constructor(
        @Inject("DISHES_REPOSITORY")
        private readonly dishesRepository: MongoRepository<Dish>,
    ) {
        super(dishesRepository);
    }

    public async getByKitchenId(kitchenId: string): Promise<Dish[]> {
        return this.dishesRepository.find({
            where: {
                kitchenId: new ObjectId(kitchenId),
            },
        });
    }
}
