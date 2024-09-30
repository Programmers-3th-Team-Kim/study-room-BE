import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ collection: 'Planners', strict: 'throw', minimize: false })
export class Statistic {
  @Prop({ required: true })
  date: string;

  @Prop({ default: 0 })
  totalTime: number;

  @Prop({ default: 0 })
  maxTime: number;

  @Prop({ default: 0 })
  restTime: number;

  @Prop({ default: 0 })
  mornning: number;

  @Prop({ default: 0 })
  afternoon: number;

  @Prop({ default: 0 })
  evening: number;

  @Prop({ default: 0 })
  night: number;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}

export const StatisticSchema = SchemaFactory.createForClass(Statistic);
