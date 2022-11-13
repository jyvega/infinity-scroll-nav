import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any [], prop: string, wordForSearch: string, ...args: unknown[]): any[] {

    if (!!wordForSearch && (value[0] as Object)?.hasOwnProperty(prop)) {
      return value.filter(elem => (elem[prop] as string).toUpperCase().includes(wordForSearch.toUpperCase()))
    } else {
      return value;
    }

  }
}
