import { Restaurant, RestaurantGateway } from '@/domain/restaurant'

export class GetAllRestaurantsUseCase {
  constructor(private restaurantService: RestaurantGateway) {}

  async execute(): Promise<Restaurant[]> {
    return this.restaurantService.getAll()
  }
}
