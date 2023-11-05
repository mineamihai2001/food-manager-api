import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { HealthCheckController } from "../controllers";
import { KitchensModule } from "./kitchens.module";
import { IngredientsModule } from "./ingredients.module";
import { DishesModule } from "./dishes.module";

@Module({
    imports: [
        RouterModule.register([
            {
                path: "kitchens",
                module: KitchensModule,
            },
            {
                path: "dishes",
                module: DishesModule,
            },
            {
                path: "ingredients",
                module: IngredientsModule,
            },
        ]),
        KitchensModule,
        DishesModule,
        IngredientsModule,
    ],
    controllers: [HealthCheckController],
    providers: [],
})
export class AppModule {}
