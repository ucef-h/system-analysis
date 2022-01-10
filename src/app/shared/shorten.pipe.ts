import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'shortenPipe'})
export class ShortenPipe implements PipeTransform {

    transform(value: any, limit: number, ...args: any[]) {
        return value.substr(0, limit) + '...';
    }

}