import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("kitchens")
export class Kitchen {
    @ObjectIdColumn()
    private _id: ObjectId;

    @Column()
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): string {
        return this._id.toString();
    }
}
