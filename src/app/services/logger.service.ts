import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  public log(...message: any[]): void {
      this.logAt('LOGGER', ...message);
  }

  public logAt(category: string, ...message: any[]): void {
      if (!environment.production) {
          console.log(`[${category}]`, ...message);
      }
  }

  public warn(...message: any[]): void {
      if (!environment.production) {
          console.warn(...message);
      }
  }

  public errorStandard(category: string, method: string, data?: any): void {
      this.error(`[${category}:ERROR]`, 'Error while executing ', method, '. Data: ', data);
  }

  public error(...message: any[]): void {
      if (!environment.production) {
          console.error(...message);
      }
  }

  public errorOp(category: string, method: string, data?: any): any {
      return catchError<any, any>(err => {
          this.errorStandard(category, method, data);
          return throwError(err);
      });
  }
}
