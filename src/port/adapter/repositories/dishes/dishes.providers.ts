import { Dish } from "@domain/entities";
import { DataSource } from "typeorm";

export const dishesProviders = [
    {
        provide: "DISHES_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Dish),
        inject: ["DB_CONNECTION"],
    },
];
