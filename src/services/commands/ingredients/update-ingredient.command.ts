export class UpdateIngredientCommand {
    public constructor(
        private readonly id: string,
        private readonly name: string,
        private readonly kitchenId: string,
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
}
