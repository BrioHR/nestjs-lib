import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";

const mongoose = require("mongoose");

/**
 * Pipe to check if a string value is a valid Mongo ObjectId
 */

@Injectable()
export class ObjectIdPipe implements PipeTransform<string, string> {
  public transform(objectId: string, metadata: ArgumentMetadata): string {
    const isValid = mongoose.Types.ObjectId.isValid(objectId);

    if (!isValid) {
      throw new BadRequestException("The id provided in not a valid Mongo ObjectId");
    }

    return objectId;
  }
}
