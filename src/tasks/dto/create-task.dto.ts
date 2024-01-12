import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, MinLength } from 'class-validator';

export enum TaskStatus {
  'success',
  'progress',
  'pending',
}

export class CreateTaskDto {
  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({
    default: 'Название задачи',
  })
  title: string;

  @IsEnum(TaskStatus, {
    message: `Введите корректный статус: success, progress, pending`,
  })
  @ApiProperty({
    default: 'pending',
  })
  status: string;

  @IsNotEmpty()
  @MinLength(1)
  @ApiProperty({
    default: 'Описание задачи',
  })
  description: string;
}
