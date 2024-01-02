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
exports.supplierService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let supplierService = class supplierService {
    constructor(supplierModel) {
        this.supplierModel = supplierModel;
    }
    async findAll() {
        return await this.supplierModel.find().exec();
    }
    async findOne(id) {
        const supplier = await this.supplierModel.findById(id).exec();
        if (!supplier) {
            throw new common_1.NotFoundException(`supplier with ID ${id} not found`);
        }
        return supplier;
    }
    async create(createsupplierDto) {
        const newsupplier = new this.supplierModel(createsupplierDto);
        return await newsupplier.save();
    }
    async update(id, updatesupplierDto) {
        const updatedsupplier = await this.supplierModel.findByIdAndUpdate(id, updatesupplierDto, { new: true }).exec();
        if (!updatedsupplier) {
            throw new common_1.NotFoundException(`supplier with ID ${id} not found`);
        }
        return updatedsupplier;
    }
    async delete(id) {
        const deletedsupplier = await this.supplierModel.findByIdAndDelete(id).exec();
        if (!deletedsupplier) {
            throw new common_1.NotFoundException(`supplier with ID ${id} not found`);
        }
        return deletedsupplier;
    }
};
exports.supplierService = supplierService;
exports.supplierService = supplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('supplier')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], supplierService);
//# sourceMappingURL=supplier.service.js.map