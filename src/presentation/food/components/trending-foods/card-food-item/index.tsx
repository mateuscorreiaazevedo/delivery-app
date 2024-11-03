import { Ionicons } from '@expo/vector-icons'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { Food } from '@/domain/food/entity/food'
import { formatPrice } from '@/presentation/shared/utils/format-price'

type Props = {
  food: Food
}

export function CardFoodItem({ food }: Props) {
  return (
    <TouchableOpacity key={food.id} activeOpacity={0.8}>
      <View className="relative gap-1">
        <View className="absolute right-1 top-1 z-10 flex-row items-center justify-center gap-1 rounded-full bg-neutral-900/95 px-2 py-1">
          <Ionicons name="star" size={14} color="#ca8a04" />
          <Text className="text-sm font-bold text-white">{food.rating}</Text>
        </View>

        <Image
          className="h-36 w-44 rounded-xl"
          source={{
            uri: food.image,
          }}
        />

        <View className="gap-1">
          <Text className="text-lg font-medium text-green-700">{formatPrice(food.price)}</Text>
          <Text className="text-black">{food.name}</Text>
          <Text className="text-sm text-neutral-600">
            {food.time} - {formatPrice(food.delivery)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
