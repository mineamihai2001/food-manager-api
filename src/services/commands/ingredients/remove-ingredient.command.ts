export class RemoveIngredientCommand {
    public constructor(private readonly ingredientId: string) {}

    public getIngredientId(): string {
        return this.ingredientId;
    }
}
