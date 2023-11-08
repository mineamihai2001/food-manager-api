import { LogModule } from "@helpers/log";
import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { DishesRepository, dishesProviders } from "@port/adapter/repositories";
import {
    CreateDishService,
    GetAllDishesService,
    GetDishesByIngredientsService,
    RemoveDishService,
    UpdateDishService,
} from "@services/dishes";
import {
    CreateDishController,
    GetAllDishesController,
    GetDishesByIngredientsController,
    RemoveDishController,
    UpdateDishController,
} from "../controllers/dishes";

@Module({
    imports: [MongoModule, LogModule],
    providers: [
        ...dishesProviders,
        DishesRepository,
        CreateDishService,
        RemoveDishService,
        GetAllDishesService,
        UpdateDishService,
        GetDishesByIngredientsService,
    ],
    controllers: [
        GetAllDishesController,
        GetDishesByIngredientsController,
        CreateDishController,
        UpdateDishController,
        RemoveDishController,
    ],
})
export class DishesModule {}
