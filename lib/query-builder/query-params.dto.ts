import { ApiModelPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

/* tslint:disable:max-line-length */

/**
 * The filtering is done by the pipe, this class is done ONLY for the swagger
 * documentation
 */
export class QueryParamsDto {
  @ApiModelPropertyOptional({
    description:
      "Replace this property by a mongo query object:" +
      " https://docs.mongodb.com/manual/tutorial/query-documents/",
    type: Object
  })
  @IsOptional()
  public readonly YourQueryObject: any;
}
