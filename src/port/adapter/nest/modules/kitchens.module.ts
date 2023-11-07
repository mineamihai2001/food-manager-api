import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { KitchensRepository, kitchensProviders } from "@port/adapter/repositories/kitchens";
import { CreateKitchenController, GetAllKitchensController } from "../controllers/kitchens";
import { CreateKitchenService, GetAllKitchensService } from "@services/kitchens";

@Module({
    imports: [MongoModule],
    providers: [...kitchensProviders, KitchensRepository, CreateKitchenService, GetAllKitchensService],
    controllers: [CreateKitchenController, GetAllKitchensController],
})
export class KitchensModule {}
