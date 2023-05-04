import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: any): any {
    if (value == 'free'){
      value = value.toUpperCase();
      return value;
    }
    
    return '$'+value;
  }

}
