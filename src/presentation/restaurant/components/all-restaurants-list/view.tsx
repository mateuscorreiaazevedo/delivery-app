import { View } from 'react-native'

import { CardRestaurant } from '../card-restaurant'
import { useAllRestaurantsListModel } from './model'

type ViewProps = ReturnType<typeof useAllRestaurantsListModel>

export function AllRestaurantsListView({ restaurants }: ViewProps) {
  return (
    <View className="flex-1 gap-y-4 px-4">
      {restaurants?.map((item) => (
        <CardRestaurant direction="horizontal" restaurant={item} key={item.id} />
      ))}
    </View>
  )
}
