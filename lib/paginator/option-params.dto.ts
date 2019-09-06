import { ApiModelPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

/* tslint:disable:max-line-length */

/**
 * The filtering is done by the pipe, this class is done ONLY for the swagger
 * documentation
 */
export class OptionParamsDto {
  @ApiModelPropertyOptional({
    description: " Fields to return (https://mongoosejs.com/docs/api.html#query_Query-select)",
    type: String
  })
  @IsOptional()
  @IsString()
  public readonly select: string;

  @ApiModelPropertyOptional({
    description: " Specify the collation (https://docs.mongodb.com/manual/reference/collation/)",
    type: String
  })
  @IsOptional()
  @IsString()
  public readonly collation: string;

  @ApiModelPropertyOptional({
    description: "Sort order (https://mongoosejs.com/docs/api.html#query_Query-sort)",
    type: String
  })
  @IsOptional()
  @IsString()
  public readonly sort: string;

  @ApiModelPropertyOptional({
    description: "Page for the current query",
    type: Number,
    default: 1
  })
  @IsOptional()
  @IsString()
  public readonly page: string;

  @ApiModelPropertyOptional({
    description: "Number of element returned per query",
    type: Number,
    default: 100,
    maximum: 1000
  })
  @IsOptional()
  @IsString()
  public readonly limit: string;
}
