export class RemoveDishCommand {
    public constructor(private readonly dishId: string) {}

    public getDishId(): string {
        return this.dishId;
    }
}
