import { Restaurant } from '@/domain/restaurant/entity/restaurant'

export abstract class RestaurantGateway {
  abstract getAll(): Promise<Restaurant[]>
}
