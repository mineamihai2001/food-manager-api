export class CreateIngredientCommand {
    public constructor(
        private readonly name: string,
        private readonly kitchenId: string,
    ) {}

    public getName(): string {
        return this.name;
    }

    public getKitchenId(): string {
        return this.kitchenId;
    }
}
