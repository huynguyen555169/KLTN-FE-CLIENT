import { Pipe, PipeTransform } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Pipe({
  name: 'countNumber'
})
export class CountNumberPipe implements PipeTransform {
  transform(value: string, ...args: string[]): Observable<number | string> {
    let tempValue = 0;
    const count = +args[0] || 100;
    const duration = +args[1] || 3000;

    if (isNaN(+value) || isNaN(count) || isNaN(duration)) {
      return of(value);
    }

    const countPerStep = Math.ceil(+value / count);

    return interval(duration / count).pipe(
      take(count),
      map(tick => {
        tempValue = Math.min(+value, countPerStep + tempValue);
        return tempValue;
      })
    );
  }
}
