import { Restaurant, RestaurantGateway } from '@/domain/restaurant'
import { HttpClient } from '@/infra/http/http-client'
import { HttpClientResponseHandle } from '@/infra/utils/http-client-response-handle'
import { restaurantEndpointConstants } from '@/main/constants/restaurant'

export class HttpRestaurantService implements RestaurantGateway {
  constructor(private http: HttpClient) {}

  async getAll(): Promise<Restaurant[]> {
    const response = await this.http.request<Restaurant[]>({
      url: restaurantEndpointConstants.getAll,
    })

    return HttpClientResponseHandle.handle<Restaurant[]>(response)
  }
}
