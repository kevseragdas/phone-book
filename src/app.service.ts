import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';

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

  addNewPerson(data: CreatePersonDto): Person{
      const human = new Person;
      human.Id = data.id;
      human.Name = data.name;
      human.Number = data.phone;
      this.people.push(human);
      return human;
  }

  deletePerson(id: number): boolean {
    const index = this.people.findIndex(p => p.Id === id);
    if (index === -1) return false;
    this.people.splice(index, 1);
    return true;
  }
}
