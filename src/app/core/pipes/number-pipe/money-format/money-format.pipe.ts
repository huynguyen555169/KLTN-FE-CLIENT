import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {
  transform(value: string | number, ...args: unknown[]): string {
    if (isNaN(+value)) {
      return value.toString();
    }

    const separate = args[0] || '.';

    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${separate}`);
  }
}
