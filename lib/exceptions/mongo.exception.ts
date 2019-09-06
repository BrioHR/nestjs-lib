import { ArgumentsHost, Catch, HttpException, HttpStatus } from "@nestjs/common";
import { Error } from "mongoose";
import { BaseExceptionFilter } from "@nestjs/core";

/**
 * Catch error that can occur when using the mongoose plugin
 */

@Catch(Error)
export class MongoExceptionFilter extends BaseExceptionFilter {
  public catch(mongoError: Error, host: ArgumentsHost) {
    const message = {
      statusCode: HttpStatus.BAD_REQUEST,
      error: `MongooseError (${mongoError.name})`,
      message: mongoError,
    };

    return super.catch(new HttpException(message, HttpStatus.BAD_REQUEST), host);
  }
}
