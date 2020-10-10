import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDate'
})
export class ShortDatePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (isNaN(new Date(value).getTime())) {
      return value;
    }

    const formatString = args[0];
    if (!formatString) {
      return value;
    }
    const seperate = args[1] ? args[1] : '-';
    const dateConvert = new Date(value);
    const formatResult = this.formatDateTime(
      dateConvert,
      formatString,
      seperate
    );
    return formatResult || value;
  }

  /**
   * Format meaning:
   * D: day
   * M: month
   * Y: year
   * h: hour
   * m: minute
   * s: second
   * Accepted format:
   * M(MM)-D(DD)-YY(YYYY) h(hh):m(mm):s(ss) with no order between parts
   */
  formatDateTime(date: Date, formatString: string, seperate: string) {
    const formats = formatString.split(' ');
    let dateFirst = true;
    let dateFormats;
    let timeFormats;
    if (formats[0].includes('-')) {
      dateFormats = formats[0] ? formats[0].split('-') : [];
      timeFormats = formats[1] ? formats[1].split(':') : [];
    } else {
      dateFormats = formats[1] ? formats[1].split('-') : [];
      timeFormats = formats[0] ? formats[0].split(':') : [];
      dateFirst = false;
    }
    if (
      (dateFormats.length === 0 || dateFormats.length > 3) &&
      (timeFormats.length === 0 || timeFormats.length > 3)
    ) {
      // formatString not valid
      return null;
    }

    let result = '';
    const sep = seperate ? seperate : '-';

    if (dateFirst) {
      result = this.formatDate(date, dateFormats, sep);
      result = `${result} ${this.formatTime(date, timeFormats)}`;
    } else {
      result = this.formatTime(date, timeFormats);
      result = `${result} ${this.formatDate(date, dateFormats, sep)}`;
    }
    return result.trim();
  }

  formatDate(date: Date, dateFormats: string[], sep: string) {
    let result = '';
    let year;
    let month;
    let day;
    for (const dateFormat of dateFormats) {
      switch (dateFormat[0]) {
        case 'Y':
          if (dateFormat.length !== 2 && dateFormat.length !== 4) {
            // Part of format no valid
            return '';
          }
          year =
            dateFormat.length === 2
              ? date.getFullYear() % 100
              : date.getFullYear();
          result = `${result}${year}${sep}`;
          break;
        case 'M':
          if (dateFormat.length > 2) {
            // Part of format no valid
            return '';
          }
          month =
            dateFormat.length === 2 && date.getMonth() + 1 <= 9
              ? `0${date.getMonth() + 1}`
              : date.getMonth() + 1;
          result = `${result}${month}${sep}`;
          break;
        case 'D':
          if (dateFormat.length > 2) {
            // Part of format no valid
            return '';
          }
          day =
            dateFormat.length === 2 && date.getDate() <= 9
              ? `0${date.getDate()}`
              : date.getDate();
          result = `${result}${day}${sep}`;
          break;
      }
    }

    return result.slice(0, result.length - 1);
  }

  formatTime(date: Date, timeFormats: string[]) {
    let result = '';
    let hour;
    let minute;
    let second;
    for (const timeFormat of timeFormats) {
      switch (timeFormat[0]) {
        case 'h':
          if (timeFormat.length > 2) {
            // Part of format no valid
            return '';
          }
          hour =
            timeFormat.length === 2 && date.getHours() <= 9
              ? `0${date.getHours()}`
              : date.getHours();
          result = `${result}${hour}:`;
          break;
        case 'm':
          if (timeFormat.length > 2) {
            // Part of format no valid
            return '';
          }
          minute =
            timeFormat.length === 2 && date.getMinutes() <= 9
              ? `0${date.getMinutes()}`
              : date.getMinutes();
          result = `${result}${minute}:`;
          break;
        case 's':
          if (timeFormat.length > 2) {
            // Part of format no valid
            return '';
          }
          second =
            timeFormat.length === 2 && date.getSeconds() <= 9
              ? `0${date.getSeconds()}`
              : date.getSeconds();
          result = `${result}${second}:`;
          break;
        default:
          return '';
      }
    }
    return result.slice(0, result.length - 1);
  }
}
