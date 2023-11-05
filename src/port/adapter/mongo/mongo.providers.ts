import { ConfigHelper } from "helpers/config";
import { DataSource } from "typeorm";
import * as path from "node:path";

export const mongoProviders = [
    {
        provide: "DB_CONNECTION",
        useFactory: async (): Promise<DataSource> => {
            const config = ConfigHelper.getInstance().getConfig();

            return new DataSource({
                type: config.db.type as "mongodb",
                url: `mongodb://${config.db.host}:${config.db.port}/${config.db.database}`,
                entities: [path.join(__dirname + "../../../../domain/entities/*.entity.{js,ts}")],
                // synchronize: false,
            }).initialize();
        },
    },
];
