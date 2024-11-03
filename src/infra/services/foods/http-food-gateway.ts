import { Food } from '@/domain/food/entity/food'
import { HttpClientResponse } from '@/infra/http/http-client'

export abstract class HttpFoodGateway {
  abstract getAll(): Promise<HttpClientResponse<Food[]>>
}
