import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'

import { TrendingFoods } from '@/presentation/food/components'
import { Banner, Header, Search, Section } from '@/presentation/shared/components'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-200">
      <View className="w-full gap-2 px-4 pt-2.5" style={{ marginTop: statusBarHeight }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <View className="mt-2.5 gap-2.5">
        <Section
          title="Comidas em alta"
          size="text-2xl"
          labelButton="Ver todos"
          actionButton={() => console.log('Veja mais')}
        />
        <TrendingFoods />
        <Section
          title="Famosos no DevFood"
          size="text-lg"
          labelButton="Ver todos"
          actionButton={() => console.log('Veja mais')}
        />
      </View>
    </ScrollView>
  )
}
