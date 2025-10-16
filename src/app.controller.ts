import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { AppService, Person} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("viewList")
  viewList(): Person[] {
    return this.appService.viewList();
  }

  @Post("addPerson")
  addNewPerson(@Body() data){
    return this.appService.addNewPerson(data);
  }

}
