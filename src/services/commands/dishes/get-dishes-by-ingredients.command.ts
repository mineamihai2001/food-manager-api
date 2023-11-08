export class GetDishesByIngredientsCommand {
    public constructor(private readonly ingredientIds: string[]) {}

    public getIngredientsIds(): string[] {
        return this.ingredientIds;
    }
}
