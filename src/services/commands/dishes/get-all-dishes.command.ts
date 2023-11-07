export class GetAllDishesCommand {
    public constructor(private readonly kitchenId: string) {}

    public getKitchenId(): string {
        return this.kitchenId;
    }
}
