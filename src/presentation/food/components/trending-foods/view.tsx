import React from 'react'
import { FlatList } from 'react-native'

import { CardFoodItem } from './card-food-item'
import { useTrendingFoodsModel } from './model'

type ViewProps = ReturnType<typeof useTrendingFoodsModel>

export function TrendingFoodsView(props: ViewProps) {
  const { trendingFoods } = props

  return (
    <FlatList
      horizontal
      data={trendingFoods}
      contentContainerClassName="gap-x-4 px-4"
      renderItem={({ item }) => <CardFoodItem food={item} />}
      showsHorizontalScrollIndicator={false}
    />
  )
}
