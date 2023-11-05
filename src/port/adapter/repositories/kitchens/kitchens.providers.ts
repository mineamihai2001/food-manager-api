import { Kitchen } from "@domain/entities";
import { DataSource } from "typeorm";

export const kitchensProviders = [
    {
        provide: "KITCHENS_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Kitchen),
        inject: ["DB_CONNECTION"],
    },
];
