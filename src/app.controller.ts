import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AppService, Person} from './app.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';


@ApiTags('phonebook')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("viewList")
  @ApiResponse({ status: 200, description: 'Gives list.', type: [Person] })
  viewList(): Person[] {
    return this.appService.viewList();
  }

  @Post("addPerson")
  @ApiBody({ type: CreatePersonDto })
  @ApiResponse({ status: 201, description: 'New person added.', type: Person, example:{
  name: 'kevser',
  id: 121,
  number: '4535'
}   })
  addNewPerson(@Body() data: CreatePersonDto){
    return this.appService.addNewPerson(data);
  }

  @Delete('deletePerson/:id')
@ApiParam({ name: 'id', type: Number, description: 'Person ID to delete' })
@ApiResponse({ status: 200, description: 'Person deleted', })
@ApiResponse({ status: 404, description: 'Açıklama yazıyo' , example:{
   status: false,
   error: {
    httpCode: 404,
    message: 'Person not found in db'
   }
}  })
deletePerson(@Param('id') id: number) {
  const result = this.appService.deletePerson(Number(id));
  if (!result) return { message: 'Person not found' };
  return { message: 'Person deleted' };
}
  
}
