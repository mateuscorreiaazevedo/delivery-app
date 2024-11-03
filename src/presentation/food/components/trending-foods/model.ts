import { useQuery } from '@tanstack/react-query'
import { Alert } from 'react-native'

import { foodFactory } from '@/main/factories'

export function useTrendingFoodsModel() {
  const getTrendingFoods = async () => {
    try {
      return await foodFactory.getAllFoods.execute()
    } catch (e) {
      Alert.alert('Erro', (e as Error).message)
      return []
    }
  }

  const { data, isLoading } = useQuery<any[]>({
    queryKey: ['trending-food'],
    queryFn: getTrendingFoods,
  })

  return {
    trendingFoods: data,
    isLoading,
  }
}
