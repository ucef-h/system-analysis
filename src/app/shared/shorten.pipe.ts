import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortenPipe' })
export default class ShortenPipe implements PipeTransform {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["transform"] }] */
  transform(value: any, limit: number, ...args: any[]) {
    return `${value.substr(0, limit)}...`;
  }
}
