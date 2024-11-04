import { useQuery } from '@tanstack/react-query'

import { Restaurant } from '@/domain/restaurant'
import { restaurantFactory } from '@/main/factories'
import { useAlert } from '@/presentation/shared/hooks/use-alert'

export const useAllRestaurantsListModel = () => {
  const { setError } = useAlert()

  const fetchFamousRestaurants = async () => {
    try {
      return restaurantFactory.getAllRestaurants.execute()
    } catch (e) {
      setError((e as Error).message)
      throw Error
    }
  }

  const { data, isLoading } = useQuery<Restaurant[]>({
    queryKey: ['all-restaurants'],
    queryFn: fetchFamousRestaurants,
  })

  return {
    restaurants: data,
    isLoading,
  }
}
