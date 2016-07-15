import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'setValues'})
export class SetValuesPipe implements PipeTransform {
  transform (value: any, args?: any[]): Object[] {
    return value.values();
  }
}

@Pipe({name: 'mapValues'})
export class MapValuesPipe implements PipeTransform {
  transform (value: any, args?: any[]): Object[] {
    let returnArray = [];

    value.forEach((entryVal, entryKey) => {
      returnArray.push({
        key: entryKey,
        val: entryVal
      });
    });

    return returnArray;
  }
}
