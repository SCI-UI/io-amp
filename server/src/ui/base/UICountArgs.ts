/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UIWhereInput } from "./UIWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UICountArgs {
  @ApiProperty({
    required: false,
    type: () => UIWhereInput,
  })
  @Field(() => UIWhereInput, { nullable: true })
  @Type(() => UIWhereInput)
  where?: UIWhereInput;
}

export { UICountArgs as UICountArgs };
