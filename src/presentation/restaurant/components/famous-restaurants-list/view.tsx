import React from 'react'
import { FlatList } from 'react-native'

import { useFamousRestaurantsListModel } from './model'
import { CardRestaurant } from '../card-restaurant'

type ViewProps = ReturnType<typeof useFamousRestaurantsListModel>

export function FamousRestaurantsListView(props: ViewProps) {
  const { famousRestaurants } = props

  return (
    <FlatList
      horizontal
      data={famousRestaurants}
      contentContainerClassName="gap-x-4 px-4"
      renderItem={({ item }) => <CardRestaurant restaurant={item} />}
      showsHorizontalScrollIndicator={false}
    />
  )
}
