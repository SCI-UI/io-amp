import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UIService } from "./ui.service";
import { UIControllerBase } from "./base/ui.controller.base";

@swagger.ApiTags("uis")
@common.Controller("uis")
export class UIController extends UIControllerBase {
  constructor(
    protected readonly service: UIService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
