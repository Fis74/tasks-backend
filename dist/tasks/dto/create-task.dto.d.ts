export declare enum TaskStatus {
    'success' = 0,
    'progress' = 1,
    'pending' = 2
}
export declare class CreateTaskDto {
    title: string;
    status: string;
    description: string;
}
