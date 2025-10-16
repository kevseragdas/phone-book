import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreatePersonDto } from './dto/create-person.dto';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('viewList', () => {
    it('should return an empty array initially', () => {
      expect(appController.viewList()).toEqual([]);
    });
  });

  describe('addNewPerson', () => {
    it('should add a new person and return it', () => {
      const dto: CreatePersonDto = { id: 1, name: 'Ahmet', phone: '12345' };
      const result = appController.addNewPerson(dto);
      expect(result).toEqual({
        Id: 1,
        Name: 'Ahmet',
        Number: '12345',
      });
      expect(appController.viewList().length).toBe(1);
    });
  });

  describe('deletePerson', () => {
    it('should delete a person by id', () => {
      const dto: CreatePersonDto = { id: 2, name: 'Mehmet', phone: '67890' };
      appController.addNewPerson(dto);

      const response = appController.deletePerson(2);
      expect(response).toEqual({ message: 'Person deleted' });
      expect(appController.viewList().find(p => p.Id === 2)).toBeUndefined();
    });

    it('should return not found for non-existent id', () => {
      const response = appController.deletePerson(999);
      expect(response).toEqual({ message: 'Person not found' });
    });
  });
});
