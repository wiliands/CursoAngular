import { languages } from './enum.languages';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CurrentLocale } from './CurrentLocales';
import { CurrentLanguage } from './CurrentLanguages';

@Pipe({
  name: 'mycurrency'
})
export class MyCurrencyPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any,
            currencyCode?: string,
            display?: 'code' | 'symbol' | 'symbol-narrow' | string | boolean,
            digitsInfo?: string,
            locale?: string): string | null {
    return super.transform(
      value,
      CurrentLocale(navigator.language),
      display || 'symbol',
      digitsInfo,
      CurrentLanguage(navigator.language) || 'id'
    );
  }

}