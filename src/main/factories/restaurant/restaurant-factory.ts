import { GetAllRestaurantsUseCase } from '@/application/use-cases/restaurant'
import { AxiosHttpClientService } from '@/infra/http/axios-http-client-service'
import { HttpRestaurantService } from '@/infra/services'

const axiosHttpClient = new AxiosHttpClientService()
const httpRestaurantService = new HttpRestaurantService(axiosHttpClient)

export const restaurantFactory = {
  getAllRestaurants: new GetAllRestaurantsUseCase(httpRestaurantService),
}
