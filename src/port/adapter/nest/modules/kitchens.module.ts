import { Module } from "@nestjs/common";
import { MongoModule } from "@port/adapter/mongo";
import { KitchensRepository, kitchensProviders } from "@port/adapter/repositories/kitchens";
import { CreateKitchenController } from "../controllers/kitchens";
import { CreateKitchenService } from "@services/kitchens";

@Module({
    imports: [MongoModule],
    providers: [...kitchensProviders, CreateKitchenService, KitchensRepository],
    controllers: [CreateKitchenController],
})
export class KitchensModule {}
