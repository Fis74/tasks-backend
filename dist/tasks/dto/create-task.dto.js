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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTaskDto = exports.TaskStatus = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["success"] = 0] = "success";
    TaskStatus[TaskStatus["progress"] = 1] = "progress";
    TaskStatus[TaskStatus["pending"] = 2] = "pending";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        default: 'Название задачи',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(TaskStatus, {
        message: `Введите корректный статус: success, progress, pending`,
    }),
    (0, swagger_1.ApiProperty)({
        default: 'pending',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(1),
    (0, swagger_1.ApiProperty)({
        default: 'Описание задачи',
    }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
//# sourceMappingURL=create-task.dto.js.map