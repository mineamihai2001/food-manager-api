import { Ingredient } from "@domain/entities";
import { CrudRepository } from "../crud.repository";
import { Inject, Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";
import { ObjectId } from "mongodb";

@Injectable()
export class IngredientsRepository extends CrudRepository<Ingredient> {
    constructor(
        @Inject("INGREDIENTS_REPOSITORY")
        private readonly ingredientsRepository: MongoRepository<Ingredient>,
    ) {
        super(ingredientsRepository);
    }

    public getByKitchenId(kitchenId: string): Promise<Ingredient[]> {
        return this.ingredientsRepository.find({
            where: {
                kitchenId: new ObjectId(kitchenId),
            },
        });
    }
}
