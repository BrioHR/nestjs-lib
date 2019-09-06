import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";

/**
 * Pipe to check if a string value is a valid Mongo ObjectId
 */

@Injectable()
export class StringNotEmptyPipe implements PipeTransform<string, string> {
  public transform(string: string, metadata: ArgumentMetadata): string {
    const message = `param ${metadata.data} must be a valid string (not empty)`;

    if (!string || string.length === 0) {
      throw new BadRequestException(message);
    }

    return string;
  }
}
