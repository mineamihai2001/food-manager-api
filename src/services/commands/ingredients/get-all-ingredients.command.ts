export class GetAllIngredientsCommand {
    public constructor(private readonly kitchenId: string) {}

    public getKitchenId(): string {
        return this.kitchenId;
    }
}
