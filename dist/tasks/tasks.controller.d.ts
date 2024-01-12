import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAllPagination(page: string, limit: string, status: string): Promise<[import("./entities/tasks.entity").TasksEntity[], number]>;
    findAll(): Promise<import("./entities/tasks.entity").TasksEntity[]>;
    register(dto: CreateTaskDto): Promise<CreateTaskDto & import("./entities/tasks.entity").TasksEntity>;
    update(id: string, dto: UpdateTaskDto): Promise<import("./entities/tasks.entity").TasksEntity>;
    findById(id: string): Promise<import("./entities/tasks.entity").TasksEntity>;
    deleteById(id: string): Promise<import("./entities/tasks.entity").TasksEntity>;
}
