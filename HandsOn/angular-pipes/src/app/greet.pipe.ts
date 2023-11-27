import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet',
  standalone: true,
})
export class GreetPipe implements PipeTransform {
  transform(name: string, msg?: string): string {
    if (msg == undefined) return 'Hi' + ' ' + name;
    else return msg + ' ' + name;
  }
}
