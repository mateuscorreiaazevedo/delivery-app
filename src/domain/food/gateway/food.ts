import { Food } from '@/domain/food/entity/food'

export abstract class FoodGateway {
  abstract getAll(): Promise<Food[]>
}
