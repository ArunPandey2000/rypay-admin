import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler extends ErrorHandler {
  override handleError(error: Error) {
    console.error(error);

  }
}