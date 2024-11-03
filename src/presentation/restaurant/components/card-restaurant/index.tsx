import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Restaurant } from '@/domain/restaurant'

type CardDirection = 'horizontal' | 'vertical'

type Props = {
  restaurant: Restaurant
  direction?: CardDirection
}

export function CardRestaurant({ restaurant }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={restaurant.id}
      onPress={() => alert(`Clicou no ${restaurant.name}`)}>
      <View className="items-center justify-center gap-3">
        <Image
          source={{
            uri: restaurant.image,
          }}
          className="size-20 rounded-full"
        />
        <View>
          <Text
            className="w-20 text-center text-sm font-medium leading-4 text-zinc-900"
            numberOfLines={2}>
            {restaurant.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
