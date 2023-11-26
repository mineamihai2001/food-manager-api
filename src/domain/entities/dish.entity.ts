import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

export type RecipeStep = string;

export type DishDuration = {
    min: number;
    max: number;
};

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
    private recipe: RecipeStep[];

    @Column()
    private duration: DishDuration;

    public constructor(
        kitchenId: string,
        name: string,
        description: string,
        coverPhoto: string,
        recipe: RecipeStep[],
        ingredientIds: string[],
        duration: DishDuration,
    ) {
        this.kitchenId = new ObjectId(kitchenId);
        this.name = name;
        this.description = description;
        this.coverPhoto = coverPhoto;
        this.recipe = recipe;
        this.ingredientIds = ingredientIds?.map((i) => new ObjectId(i));
        this.duration = duration;
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

    public getRecipe(): RecipeStep[] {
        return this.recipe;
    }

    public getDuration(): DishDuration {
        return this.duration;
    }
}
