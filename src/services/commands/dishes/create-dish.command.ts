import { DishDuration, RecipeStep } from "@domain/entities";

export class CreateDishCommand {
    public constructor(
        private readonly kitchenId: string,
        private readonly name: string,
        private readonly description: string,
        private readonly coverPhoto: string,
        private readonly recipe: RecipeStep[],
        private readonly ingredientIds: string[],
        private readonly duration: DishDuration,
    ) {}

    public getKitchenId(): string {
        return this.kitchenId.toString();
    }

    public getName(): string {
        return this.name;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCoverPhoto(): string {
        return this.coverPhoto;
    }

    public getIngredientIds(): string[] {
        return this.ingredientIds;
    }

    public getRecipe(): RecipeStep[] {
        return this.recipe;
    }

    public getDuration(): DishDuration {
        return this.duration;
    }
}
