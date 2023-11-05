export class CreateDishCommand {
    public constructor(
        private kitchenId: string,
        private name: string,
        private description: string,
        private coverPhoto: string,
        private recipe: string,
        private ingredientIds: string[],
    ) {
        this.kitchenId = kitchenId;
        this.name = name;
        this.description = description;
        this.coverPhoto = coverPhoto;
        this.recipe = recipe;
        this.ingredientIds = ingredientIds;
    }

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

    public getRecipe(): string {
        return this.recipe;
    }
}
