import { Feather } from '@expo/vector-icons'
import { TextInput, View } from 'react-native'

import { useSearchModel } from '@/modules/shared/presentation/components/search/model'

type SearchViewProps = ReturnType<typeof useSearchModel>

export function SearchView(_props: SearchViewProps) {
  return (
    <View className="h-14 w-full flex-row items-center gap-2 rounded-full border border-slate-500 bg-transparent px-4">
      <Feather name="search" size={24} color="#64748b" />

      <TextInput
        placeholder="Procure sua comida..."
        className="h-full flex-1 text-base text-slate-950"
      />
    </View>
  )
}
