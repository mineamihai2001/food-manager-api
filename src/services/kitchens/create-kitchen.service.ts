import { Kitchen } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { KitchensRepository } from "@port/adapter/repositories";
import { CreateKitchenCommand } from "@services/commands";

@Injectable()
export class CreateKitchenService {
    public constructor(private readonly repository: KitchensRepository) {}

    public createKitchen(command: CreateKitchenCommand): Promise<Kitchen> {
        return this.repository.add(new Kitchen(command.getName()));
    }
}
