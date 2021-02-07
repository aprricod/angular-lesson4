import { SlicePipe } from '@angular/common';
import { stringify, ValueTransformer } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(values: string[], ...args: unknown[]): string {
    const mapValue: string[] = values.map((value) => {
      return (
        '+7' +
        '(' +
        value.slice(0, 3) +
        ')' +
        value.slice(3, 6) +
        '-' +
        value.slice(6, 8) +
        '-' +
        value.slice(8, 10)
      );
    });
    return mapValue.join(', ');
  }
}
