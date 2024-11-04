export interface RestaurantInterface {
  id?: string
  name: string
  image?: string
}

export class Restaurant {
  constructor(private readonly restaurant: RestaurantInterface) {}

  get id(): string {
    return this.restaurant.id ?? ''
  }

  get name(): string {
    return this.restaurant.name
  }

  get image(): string | undefined {
    return this.restaurant.image
  }
}
