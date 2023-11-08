import { LogModule } from "@helpers/log";
import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { IngredientsRepository, ingredientsProviders } from "@port/adapter/repositories";
import {
    CreateIngredientService,
    GetAllIngredientsService,
    RemoveIngredientService,
    UpdateIngredientService,
} from "@services/ingredients";
import {
    CreateIngredientController,
    GetAllIngredientsController,
    RemoveIngredientController,
    UpdateIngredientController,
} from "../controllers/ingredients";

@Module({
    imports: [MongoModule, LogModule],
    providers: [
        ...ingredientsProviders,
        CreateIngredientService,
        GetAllIngredientsService,
        UpdateIngredientService,
        RemoveIngredientService,
        IngredientsRepository,
    ],
    controllers: [
        GetAllIngredientsController,
        CreateIngredientController,
        UpdateIngredientController,
        RemoveIngredientController,
    ],
})
export class IngredientsModule {}
