import { Feather, Ionicons } from '@expo/vector-icons'
import { Pressable, Text, View } from 'react-native'
export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Pressable className="size-10 items-center justify-center rounded-full bg-white">
        <Ionicons name="menu" size={20} color="#121212" />
      </Pressable>

      <View className="items-center justify-center">
        <Text>Localização</Text>

        <View className="flex-row items-center justify-center gap-1">
          <Feather name="map-pin" size={14} color="#ff000" />
          <Text>Rio de contas</Text>
        </View>
      </View>

      <Pressable className="size-10 items-center justify-center rounded-full bg-white">
        <Feather name="bell" size={20} color="#121212" />
      </Pressable>
    </View>
  )
}
