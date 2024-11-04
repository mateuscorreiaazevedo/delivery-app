import { Food } from '@/domain/food/entity/food'
import { FoodGateway } from '@/domain/food/gateway/food'

export class GetAllFoodsUseCase {
  constructor(private foodService: FoodGateway) {}

  async execute(): Promise<Food[]> {
    return await this.foodService.getAll()
  }
}
