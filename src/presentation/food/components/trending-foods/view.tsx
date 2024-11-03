import { FlatList } from 'react-native'

import { CardFoodItem } from './card-food-item'
import { useTrendingFoodsModel } from './model'

type ViewProps = ReturnType<typeof useTrendingFoodsModel>

export function TrendingFoodsView(props: ViewProps) {
  const { trendingFoods } = props
  return <FlatList data={trendingFoods} renderItem={() => <CardFoodItem />} />
}
