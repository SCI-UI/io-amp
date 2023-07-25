/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { WorkflowWhereUniqueInput } from "../../workflow/base/WorkflowWhereUniqueInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  collaborators?: UserUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: () => WorkflowWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorkflowWhereUniqueInput)
  @IsOptional()
  @Field(() => WorkflowWhereUniqueInput, {
    nullable: true,
  })
  workflows?: WorkflowWhereUniqueInput | null;
}

export { ProjectUpdateInput as ProjectUpdateInput };
