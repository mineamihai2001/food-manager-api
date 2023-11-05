import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity("dishes")
export class Dish {
    @ObjectIdColumn()
    private _id: ObjectId;

    @Column()
    private kitchenId: ObjectId;

    @Column()
    private name: string;

    @Column()
    private description: string;

    @Column()
    private coverPhoto: string;

    @Column()
    private ingredientIds: ObjectId[];

    @Column()
    private recipe: string;

    public constructor(
        kitchenId: string,
        name: string,
        description: string,
        coverPhoto: string,
        recipe: string,
        ingredientIds: string[],
    ) {
        this.kitchenId = new ObjectId(kitchenId);
        this.name = name;
        this.description = description;
        this.coverPhoto = coverPhoto;
        this.recipe = recipe;
        this.ingredientIds = ingredientIds?.map((i) => new ObjectId(i));
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

    public getDescription(): string {
        return this.description;
    }

    public getCoverPhoto(): string {
        return this.coverPhoto;
    }

    public getIngredientIds(): string[] {
        return this.ingredientIds.map((i) => i.toString());
    }

    public getRecipe(): string {
        return this.recipe;
    }
}
