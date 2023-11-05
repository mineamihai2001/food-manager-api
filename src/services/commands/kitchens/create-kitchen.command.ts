export class CreateKitchenCommand {
    public constructor(private readonly name: string) {}

    public getName(): string {
        return this.name;
    }
}
