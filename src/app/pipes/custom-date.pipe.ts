import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: Date): string {
    if (!value) {
      return '';
    }

    const today = new Date();
    const dateValue = new Date(value);

    // Check if the date is today
    if (
      dateValue.getDate() === today.getDate() &&
      dateValue.getMonth() === today.getMonth() &&
      dateValue.getFullYear() === today.getFullYear()
    ) {
      return `Today, ${dateValue.toLocaleTimeString()}`;
    } else {
      return dateValue.toLocaleString();
    }
  }

}
