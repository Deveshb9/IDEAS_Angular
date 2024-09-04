import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelcase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log(args);
    if (typeof value !== 'string') {
      return value;
    }
    return value.charAt(0).toLowerCase() + value.slice(1);
  }
}
