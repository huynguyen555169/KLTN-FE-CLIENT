import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    const prefix = args[0];

    if (prefix) {
      return `${prefix} ${value}`;
    }
    return value;
  }
}

// Import to declarations array (like component) in module need to use
