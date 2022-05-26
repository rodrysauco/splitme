import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatString'
})
export class FormatStringPipe implements PipeTransform {

  transform(value: any): string {
    let result = '';
    if (value) {
      const texto = value.toLowerCase();
      const mayus = texto.slice(0, 1);
      const minus = texto.slice(1);
      result = `${mayus.toUpperCase()}${minus}`;
    }
    return result;
  }

}
