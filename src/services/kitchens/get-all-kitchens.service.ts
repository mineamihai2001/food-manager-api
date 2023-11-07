import { Kitchen } from "@domain/entities";
import { Injectable } from "@nestjs/common";
import { KitchensRepository } from "@port/adapter/repositories";
import { GetAllKitchensCommand } from "@services/commands/kitchens";

@Injectable()
export class GetAllKitchensService {
    public constructor(private readonly repository: KitchensRepository) {}

    public async getAllKitchens(command: GetAllKitchensCommand): Promise<Kitchen[]> {
        return this.repository.getAll();
    }
}
