import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})


export class SearchPipe implements PipeTransform{
  transform(users: any, value: any) {
    return users.filter((user: any) => {
      return user.name.includes(value)
    });
  }
}
