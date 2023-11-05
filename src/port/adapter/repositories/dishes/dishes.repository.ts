import { Dish } from "@domain/entities";
import { CrudRepository } from "../crud.repository";
import { Inject, Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export class DishesRepository extends CrudRepository<Dish> {
    constructor(
        @Inject("DISHES_REPOSITORY")
        private readonly dishes: MongoRepository<Dish>,
    ) {
        super(dishes);
    }
}
