import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TasksEntity } from './entities/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksEntity)
    private repository: Repository<TasksEntity>,
  ) {}

  async findAllPagination(page: number, limit: number, status: string) {
    return await this.repository.findAndCount({
      where: { status },
      order: { createdAt: 'DESC' },
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  async findAll() {
    return await this.repository.find({ order: { createdAt: 'DESC' } });
  }

  async findById(id: number) {
    const task = await this.repository.findOne({
      where: { id },
    });
    if (!task) throw new NotFoundException('Такой задачи нет');
    return task;
  }

  async deleteById(id: number) {
    const task = await this.findById(id);
    await this.repository.delete(id);
    return task;
  }

  async create(dto: CreateTaskDto) {
    return await this.repository.save(dto);
  }

  async update(id: number, dto: UpdateTaskDto) {
    await this.findById(id);
    await this.repository.update(id, dto);
    const taskUpdated = await this.findById(id);
    return taskUpdated;
  }
}
