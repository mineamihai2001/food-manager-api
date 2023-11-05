import { LogModule } from "@helpers/log";
import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { DishesRepository, dishesProviders } from "@port/adapter/repositories";
import { CreateDishService } from "@services/dishes";
import { CreateDishController } from "../controllers/dishes";

@Module({
    imports: [MongoModule, LogModule],
    providers: [...dishesProviders, CreateDishService, DishesRepository],
    controllers: [CreateDishController],
})
export class DishesModule {}
