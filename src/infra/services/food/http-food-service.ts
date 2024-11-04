import { Food } from '@/domain/food/entity/food'
import { FoodGateway } from '@/domain/food/gateway/food'
import { HttpClient } from '@/infra/http/http-client'
import { HttpClientResponseHandle } from '@/infra/utils/http-client-response-handle'
import { foodEndpointsConstants } from '@/main/constants/food'

export class HttpFoodService implements FoodGateway {
  constructor(private http: HttpClient) {}

  async getAll(): Promise<Food[]> {
    const response = await this.http.request<Food[]>({
      url: foodEndpointsConstants.getAll,
    })

    return HttpClientResponseHandle.handle<Food[]>(response)
  }
}
