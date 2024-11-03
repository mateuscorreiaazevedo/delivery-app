import { useQuery } from '@tanstack/react-query'

export function useTrendingFoodsModel() {
  const { data, isLoading } = useQuery<any[]>({
    queryKey: ['trending-foods'],
    queryFn: () => [],
  })

  return {
    trendingFoods: data,
    isLoading,
  }
}
