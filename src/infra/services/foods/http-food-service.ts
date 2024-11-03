import { Food } from '@/domain/food/entity/food'
import { HttpClient, HttpClientResponse } from '@/infra/http/http-client'
import { HttpFoodGateway } from '@/infra/services/foods/http-food-gateway'

export class HttpFoodService implements HttpFoodGateway {
  constructor(private http: HttpClient) {}

  async getAll(): Promise<HttpClientResponse<Food[]>> {
    return this.http.request<Food[]>({
      url: '/foods',
    })
  }
}
