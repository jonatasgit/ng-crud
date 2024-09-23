import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'front-end':
        return 'fullscreen';
      case 'back-end':
        return 'terminal';
      default:
        return 'home';
    }
  }
}
