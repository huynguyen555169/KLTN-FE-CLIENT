import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfix'
})
export class PostfixPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const postfix = args[0];

    if (postfix) {
      return `${value} ${postfix}`;
    }
    return value;
  }
}
