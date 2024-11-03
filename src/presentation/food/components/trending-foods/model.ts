import { useQuery } from '@tanstack/react-query'

import { Food } from '@/domain/food'
import { foodFactory } from '@/main/factories'
import { useAlert } from '@/presentation/shared/hooks/use-alert'

export function useTrendingFoodsModel() {
  const { setError } = useAlert()

  const getTrendingFoods = async () => {
    try {
      return await foodFactory.getAllFoods.execute()
    } catch (e) {
      setError((e as Error).message)
      throw Error
    }
  }

  const { data, isLoading } = useQuery<Food[]>({
    queryKey: ['trending-food'],
    queryFn: getTrendingFoods,
  })

  return {
    trendingFoods: data,
    isLoading,
  }
}
