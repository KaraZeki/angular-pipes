import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, type: string): unknown {

    switch (type) {
      case "km":
        return value * 1.609344;
      case "cm":
        return value * 1.609344 * 100000;
      case "m":
        return value * 1.609344 * 1000;

      case "dm":
        return value * 1.609344 * 10000;
      default:
        return new Error("Birim hatası");
    }
  }

}
