import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSearch',
  standalone: true
})
export class NameSearchPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
