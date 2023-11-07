import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { GetAllKitchensService } from "@services/kitchens";
import { IController } from "../types";
import { GetAllKitchensCommand } from "@services/commands/kitchens";

@Controller()
@ApiTags("Kitchens")
export class GetAllKitchensController implements IController {
    public constructor(private readonly getAllKitchensService: GetAllKitchensService) {}

    @Get()
    public async handle(): Promise<unknown> {
        const command = new GetAllKitchensCommand();

        return this.getAllKitchensService.getAllKitchens(command);
    }
}
