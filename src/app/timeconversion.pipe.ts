import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeconversion'
})
export class TimeconversionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
