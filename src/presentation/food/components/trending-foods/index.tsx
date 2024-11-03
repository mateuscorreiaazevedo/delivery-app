import { useTrendingFoodsModel } from './model'
import { TrendingFoodsView } from './view'

export function TrendingFoods() {
  return <TrendingFoodsView {...useTrendingFoodsModel()} />
}
