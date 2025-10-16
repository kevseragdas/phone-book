import { Injectable } from '@nestjs/common';
import { stringify } from 'querystring';

export class Person{
  Name : string;
  Number : string;
  Id : number;
}
@Injectable()
export class AppService {
  private people: Person[] = [];

  viewList(): Person[] {
    return this.people ;
  }

  addNewPerson(data){
      const human = new Person;
      human.Id = data.id;
      human.Name = data.name;
      human.Number = data.phone;
      this.people.push(human);
  }
}
