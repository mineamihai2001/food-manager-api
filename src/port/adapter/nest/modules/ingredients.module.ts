import { LogModule } from "@helpers/log";
import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { IngredientsRepository, ingredientsProviders } from "@port/adapter/repositories";
import { CreateIngredientService, UpdateIngredientService } from "@services/ingredients";
import { CreateIngredientController } from "../controllers/ingredients/create-ingredient.controller";
import { UpdateIngredientController } from "../controllers/ingredients/update-ingredient.controller";

@Module({
    imports: [MongoModule, LogModule],
    providers: [...ingredientsProviders, CreateIngredientService, UpdateIngredientService, IngredientsRepository],
    controllers: [CreateIngredientController, UpdateIngredientController],
})
export class IngredientsModule {}
