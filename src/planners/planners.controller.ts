import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { PlannersService } from './planners.service';
import { Planner } from './planners.schema';
import { PlannerDto } from './dto/planner.dto';
import { Types } from 'mongoose';

@Controller('planners')
export class PlannersController {
  constructor(private readonly plannersService: PlannersService) {}

  @Post()
  async create(@Body() createPlanDto: PlannerDto): Promise<Planner> {
    return this.plannersService.createPlan(createPlanDto);
  }

  @Get()
  async findAll(@Query('date') date: string): Promise<Planner[]> {
    return this.plannersService.showAll(date);
  }

  @Put(':plannerId')
  async update(
    @Param('plannerId') plannerId: Types.ObjectId,
    @Body() updatePlannerDto: PlannerDto
  ): Promise<Planner> {
    return this.plannersService.updatePlan(plannerId, updatePlannerDto);
  }

  @Delete(':plannerId')
  async delete(
    @Param('plannerId') plannerId: Types.ObjectId
  ): Promise<Planner> {
    return this.plannersService.deletePlan(plannerId);
  }

  @Patch('completed/:plannerId')
  async toggle(
    @Param('plannerId') plannerId: Types.ObjectId
  ): Promise<Planner> {
    return this.plannersService.toggleIsComplete(plannerId);
  }
}
