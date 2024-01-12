import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@ApiTags('tasks')
@ApiBearerAuth()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAllPagination(
    @Query('page') page: string,
    @Query('limit') limit: string,
    @Query('status') status: string,
  ) {
    return this.tasksService.findAllPagination(+page, +limit, status);
  }

  @Get('all')
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: CreateTaskDto })
  register(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  @ApiBody({ type: UpdateTaskDto })
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(+id, dto);
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tasksService.findById(+id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.tasksService.deleteById(+id);
  }
}
