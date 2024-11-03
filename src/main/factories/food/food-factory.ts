import { GetAllFoodsUseCase } from '@/application/use-cases/food'
import { AxiosHttpClientService } from '@/infra/http/axios-http-client-service'
import { HttpFoodService } from '@/infra/services'

const axiosHttpClient = new AxiosHttpClientService()
const httpFoodService = new HttpFoodService(axiosHttpClient)

export const foodFactory = {
  getAllFoods: new GetAllFoodsUseCase(httpFoodService),
}
