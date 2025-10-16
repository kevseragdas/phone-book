import { ApiProperty } from '@nestjs/swagger';

export class CreatePersonDto {
  @ApiProperty({ description: 'Person name',
    example: 'Kevser'
   })
  name: string;

  @ApiProperty({ description: 'person number', example: '09876554444' })
  phone: string;

  @ApiProperty({ description: 'person id', example: '12324234234234' })
  id: number;
}
