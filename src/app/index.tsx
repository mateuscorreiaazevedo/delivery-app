import Constants from 'expo-constants'
import { ScrollView, View } from 'react-native'

import { Banner, Header, Search, Section } from '@/modules/core/presentation'

const statusBarHeight = Constants.statusBarHeight

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-slate-200">
      <View className="w-full gap-2 px-4 pt-2.5" style={{ marginTop: statusBarHeight }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section
        title="Famosos no DevFood"
        size="text-lg"
        labelButton="Ver todos"
        actionButton={() => console.log('Veja mais')}
      />
    </ScrollView>
  )
}
