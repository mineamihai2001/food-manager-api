import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("ingredients")
export class Ingredient {
    @ObjectIdColumn()
    private _id: ObjectId;

    @Column()
    private kitchenId: ObjectId;

    @Column()
    private name: string;

    public constructor(name: string, kitchenId: string) {
        this.name = name;
        this.kitchenId = new ObjectId(kitchenId);
    }

    public getId(): string {
        return this._id.toString();
    }

    public getKitchenId(): string {
        return this.kitchenId.toString();
    }

    public getName(): string {
        return this.name;
    }
}
