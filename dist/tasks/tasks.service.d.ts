import { Repository } from 'typeorm';
import { TasksEntity } from './entities/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private repository;
    constructor(repository: Repository<TasksEntity>);
    findAllPagination(page: number, limit: number, status: string): Promise<[TasksEntity[], number]>;
    findAll(): Promise<TasksEntity[]>;
    findById(id: number): Promise<TasksEntity>;
    deleteById(id: number): Promise<TasksEntity>;
    create(dto: CreateTaskDto): Promise<CreateTaskDto & TasksEntity>;
    update(id: number, dto: UpdateTaskDto): Promise<TasksEntity>;
}
