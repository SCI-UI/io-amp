import { Module } from "@nestjs/common";
import { UIModuleBase } from "./base/ui.module.base";
import { UIService } from "./ui.service";
import { UIController } from "./ui.controller";
import { UIResolver } from "./ui.resolver";

@Module({
  imports: [UIModuleBase],
  controllers: [UIController],
  providers: [UIService, UIResolver],
  exports: [UIService],
})
export class UIModule {}
