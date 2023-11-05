import { Ingredient } from "@domain/entities";
import { DataSource } from "typeorm";

export const ingredientsProviders = [
    {
        provide: "INGREDIENTS_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Ingredient),
        inject: ["DB_CONNECTION"],
    },
];
