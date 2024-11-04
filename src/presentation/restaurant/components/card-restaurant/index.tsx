import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Restaurant } from '@/domain/restaurant'

type CardDirection = 'horizontal' | 'vertical'

type Props = {
  restaurant: Restaurant
  direction?: CardDirection
}

export function CardRestaurant({ restaurant, direction = 'vertical' }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={restaurant.id}
      onPress={() => console.log(`Clicou no ${restaurant.name}`)}>
      <View className={styles[direction].view}>
        <Image
          source={{
            uri: restaurant.image,
          }}
          className={styles[direction].image}
        />
        <View className={styles[direction].viewText}>
          <Text
            className={styles[direction].text}
            numberOfLines={direction === 'horizontal' ? 1 : 2}>
            {restaurant.name}
          </Text>
          {direction === 'horizontal' && (
            <View className="flex-row items-center gap-1">
              <Ionicons name="star" size={16} color="#ca8a04" />
              <Text className="text-sm text-zinc-800">4.5</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles: Record<CardDirection, Record<string, string>> = {
  vertical: {
    view: 'items-center justify-center gap-3',
    image: 'size-20 rounded-full',
    viewText: '',
    text: 'w-20 text-center text-sm font-medium leading-4 text-zinc-900',
  },
  horizontal: {
    view: 'flex-row items-center justify-start gap-3',
    image: 'size-20 rounded-full',
    viewText: 'gap-2 flex',
    text: 'text-base font-semibold leading-4 text-zinc-900',
  },
}
