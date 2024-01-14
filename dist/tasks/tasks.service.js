"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tasks_entity_1 = require("./entities/tasks.entity");
let TasksService = class TasksService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAllPagination(page, limit, status) {
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
    async findById(id) {
        const task = await this.repository.findOne({
            where: { id },
        });
        if (!task)
            throw new common_1.NotFoundException('Такой задачи нет');
        return task;
    }
    async deleteById(id) {
        const task = await this.findById(id);
        await this.repository.delete(id);
        return task;
    }
    async create(dto) {
        return await this.repository.save(dto);
    }
    async update(id, dto) {
        await this.findById(id);
        await this.repository.update(id, { ...dto, updatedAt: new Date() });
        const taskUpdated = await this.findById(id);
        return taskUpdated;
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasks_entity_1.TasksEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
//# sourceMappingURL=tasks.service.js.map