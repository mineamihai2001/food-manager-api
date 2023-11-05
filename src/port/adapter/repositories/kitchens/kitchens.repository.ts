import { Kitchen } from "@domain/entities";
import { CrudRepository } from "../crud.repository";
import { Inject, Injectable } from "@nestjs/common";
import { MongoRepository } from "typeorm";

@Injectable()
export class KitchensRepository extends CrudRepository<Kitchen> {
    constructor(
        @Inject("KITCHENS_REPOSITORY")
        private readonly kitchensRepository: MongoRepository<Kitchen>,
    ) {
        super(kitchensRepository);
    }
}
