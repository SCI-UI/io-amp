import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UIServiceBase } from "./base/ui.service.base";

@Injectable()
export class UIService extends UIServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
