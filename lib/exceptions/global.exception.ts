import { Catch, ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";

@Catch()
export class GlobalException extends BaseExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost) {
    console.error("Exception:", exception);
    console.error("ArgumentsHost:", host);
    super.catch(exception, host);
  }
}
