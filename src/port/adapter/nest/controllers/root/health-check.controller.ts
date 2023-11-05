import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import * as crypto from "node:crypto";
import { IController } from "../types";

@Controller("health")
@ApiTags("Root")
export class HealthCheckController implements IController {
    constructor() {}

    @Get()
    public handle() {
        return {
            id: crypto.randomBytes(16).toString("hex"),
            name: "Food Manager API",
            version: 1,
            status: "up",
            updatedAt: new Date().toISOString(),
        };
    }
}
