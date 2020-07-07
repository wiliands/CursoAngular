import { languages } from './enum.languages';
import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CurrentLanguage } from './CurrentLanguages';

@Pipe({
  name: 'mydecimal'
})
export class MyDecimalPipe extends DecimalPipe implements PipeTransform {

  transform(value: any,
            digitsInfo?: string): string | null {
      return super.transform(value, digitsInfo || '1.2-2', CurrentLanguage(navigator.language));
    }

}