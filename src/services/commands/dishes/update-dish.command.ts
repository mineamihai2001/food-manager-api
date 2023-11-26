import { DishDuration, RecipeStep } from "@domain/entities";

export class UpdateDishCommand {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly kitchenId: string,
        private readonly description: string,
        private readonly coverPhoto: string,
        private readonly recipe: RecipeStep[],
        private readonly ingredientIds: string[],
        private readonly duration: DishDuration,
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getKitchenId(): string {
        return this.kitchenId;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCoverPhoto(): string {
        return this.coverPhoto;
    }

    public getRecipe(): RecipeStep[] {
        return this.recipe;
    }

    public getIngredientIds(): string[] {
        return this.ingredientIds;
    }

    public getDuration(): DishDuration {
        return this.duration;
    }
}
