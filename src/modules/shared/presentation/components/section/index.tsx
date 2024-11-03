import { Text, TouchableOpacity, View } from 'react-native'

type SectionProps = {
  title: string
  size?: 'text-lg' | 'text-xl' | 'text-2xl'
  labelButton: string
  actionButton: () => void
}

export function Section(props: SectionProps) {
  const { title, size = 'text-lg', labelButton, actionButton } = props

  return (
    <View className="w-full flex-row items-center justify-between px-4">
      <Text className={`${size} font-semibold text-slate-900`}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={actionButton}>
        <Text className="text-sm font-light text-zinc-800">{labelButton}</Text>
      </TouchableOpacity>
    </View>
  )
}
