import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { IController } from "../types";
import { CreateKitchenDto } from "@services/dtos/kitchens";
import { CreateKitchenCommand } from "@services/commands";
import { CreateKitchenService } from "@services/kitchens";

@Controller()
@ApiTags("Kitchens")
export class CreateKitchenController implements IController {
    public constructor(private readonly createKitchenService: CreateKitchenService) {}

    @Post()
    public async handle(@Body() dto: CreateKitchenDto): Promise<unknown> {
        const command = new CreateKitchenCommand(dto.name);

        return this.createKitchenService.createKitchen(command);
    }
}
