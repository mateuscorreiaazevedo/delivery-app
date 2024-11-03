export interface FoodInterface {
  id?: string
  name: string
  price: number
  time: string
  delivery: number
  rating: number
  image?: string
  restaurantId: string
}

export class Food {
  constructor(private readonly food: FoodInterface) {}

  get id(): string {
    return this.food.id ?? ''
  }

  get name(): string {
    return this.food.name
  }

  get price(): number {
    return this.food.price
  }

  get time(): string {
    return this.food.time
  }

  get delivery(): number {
    return this.food.delivery
  }

  get rating(): number {
    return this.food.rating
  }

  get image(): string | undefined {
    return this.food.image
  }

  get restaurantId(): string {
    return this.food.restaurantId
  }
}
